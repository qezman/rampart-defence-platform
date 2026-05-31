terraform {
  backend "s3" {
    bucket = "qezman-terraform-state"
    key    = "aws-three-tier/production/terraform.tfstate"
    region = "us-east-1"
  }
}