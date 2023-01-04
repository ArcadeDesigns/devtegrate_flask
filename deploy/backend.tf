terraform {
  backend "s3" {
    bucket = "devtegrate-web-app"
    key    = "devtegrate-webapp.tfstate"
    region = "us-east-2"
  }
}
