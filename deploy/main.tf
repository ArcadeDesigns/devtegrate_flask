module "networking" {
  source             = "./networking"
  vpc_cidr           = "10.0.0.0/16"
  public_cidrs       = ["10.0.1.0/24", "10.0.2.0/24"]
  availability_zones = ["us-east-2a", "us-east-2b"]
  target_id          = module.compute.autoscaling_group
  certificate_arn    = module.dns.certificate_arn
}

module "compute" {
  source                 = "./compute"
  web_sg                 = module.networking.web_sg
  public_subnet          = module.networking.public_subnet
  vpc_security_group_ids = module.networking.vpc_security_group_ids
}

module "dns" {
  source           = "./dns"
  domain_name      = "*.devtegrate.com"
  environment_name = "Dev"
  zone_name        = "devtegrate.com"
  record_name      = "www.devtegrate.com"
  alias_name       = module.networking.external-elb.dns_name
  alias_zone_id    = module.networking.external-elb.zone_id
}
