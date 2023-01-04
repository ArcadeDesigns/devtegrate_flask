#ami data
data "aws_ami" "ubuntu-linux-2004" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

#Create autoscaling group launch template
resource "aws_launch_template" "web" {
  name_prefix            = "web"
  image_id               = data.aws_ami.ubuntu-linux-2004.id
  instance_type          = var.web_instance_type
  vpc_security_group_ids = [var.vpc_security_group_ids]
  iam_instance_profile {
    name = aws_iam_instance_profile.iam-profile.name
  }
  tags = {
    Name = "web-server"
  }
}

#create autoscaling group
resource "aws_autoscaling_group" "web" {
  name                = "web"
  vpc_zone_identifier = tolist(var.public_subnet)
  min_size            = 1
  max_size            = 2
  desired_capacity    = 2

  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }

  lifecycle {
    ignore_changes = [target_group_arns]
  }
}


resource "aws_iam_role" "iam-role" {
  name               = "ssm-role"
  description        = "The role for the EC2"
  assume_role_policy = <<EOF
{
"Version": "2012-10-17",
"Statement": {
"Effect": "Allow",
"Principal": {"Service": "ec2.amazonaws.com"},
"Action": "sts:AssumeRole"
}
}
EOF
  tags = {
    Name = "iam-role"
  }
}

resource "aws_iam_instance_profile" "iam-profile" {
  name = "ec2_profile"
  role = aws_iam_role.iam-role.name
}


resource "aws_iam_role_policy_attachment" "ssm-policy" {
  role       = aws_iam_role.iam-role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_role_policy_attachment" "s3-policy" {
  role       = aws_iam_role.iam-role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

