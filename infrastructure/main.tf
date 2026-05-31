module "vpc-deployment" {
  source            = "./module-vpc"
  environment       = var.environment
  vpc_cidrblock     = var.vpc_cidrblock
  countsub          = var.countsub
  create_subnet     = var.create_subnet
  create_elastic_ip = var.create_elastic_ip
}

module "rds-mysql-deployment" {
  source                 = "./module-database"
  environment            = var.environment
  db_instance_class      = var.db_instance_class
  db_allocated_storage   = var.db_allocated_storage
  private_subnet_db_ids  = module.vpc-deployment.private_subnet_db_ids
  db_name                = var.db_name
  db_password            = var.db_password
  db_username            = var.db_username
  aws_security_group_ids = module.vpc-deployment.aws_security_group_ids
}

module "namecheap-deployment" {
  source       = "./module-dns"
  environment  = var.environment
  domain-name  = var.domain-name
  alb_dns_name = module.ecs-deployment.alb_dns_name
  alb_zone_id  = module.ecs-deployment.alb_zone_id
}

module "ecs-deployment" {
  source             = "./module-ecs"
  environment        = var.environment
  vpc_id             = module.vpc-deployment.vpc_id
  public_subnet_ids  = module.vpc-deployment.public_subnet_ids
  private_subnet_ids = module.vpc-deployment.private_subnet_ids
  db_endpoint        = module.rds-mysql-deployment.db_endpoint
  db_name            = var.db_name
  db_username        = var.db_username
  db_password        = var.db_password
  domain-name        = var.domain-name
  frontend_image     = var.frontend_image
  backend_image      = var.backend_image
  certificate_arn    = module.namecheap-deployment.certificate_arn
  resend_api_key     = var.resend_api_key
}
