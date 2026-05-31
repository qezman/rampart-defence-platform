output "alb_dns_name" {
  description = "ALB DNS name - use this to access your app"
  value       = module.ecs-deployment.alb_dns_name
}

output "ecs_cluster_name" {
  description = "ECS cluster name"
  value       = module.ecs-deployment.ecs_cluster_name
}

output "route53_name_servers" {
  description = "Add these to Namecheap custom DNS"
  value       = module.namecheap-deployment.route53_name_servers
}

output "db_host" {
  description = "DB Host endpoint"
  value       = module.rds-mysql-deployment.db_endpoint
}

output "frontend_ecr_url" {
  value = module.ecs-deployment.frontend_ecr_url
}

output "backend_ecr_url" {
  value = module.ecs-deployment.backend_ecr_url
}
