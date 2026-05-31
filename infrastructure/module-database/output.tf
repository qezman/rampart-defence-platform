output "db_endpoint" {
  value = aws_db_instance.mysql_db_instance.endpoint
}

output "db_name" {
  value = aws_db_instance.mysql_db_instance.db_name
}
