output "alb_dns_name" {
  value = aws_lb.main.dns_name
}

output "alb_zone_id" {
  value = aws_lb.main.zone_id
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.main.name
}

output "frontend_ecr_url" {
  value = aws_ecr_repository.frontend.repository_url
}

output "backend_ecr_url" {
  value = aws_ecr_repository.backend.repository_url
}

# output "cert_validation_options" {
#   value = aws_acm_certificate.main.domain_validation_options
# }

# output "cert_validation_fqdns" {
#   value = [for record in aws_route53_record.cert_validation : record.fqdn]
# }
