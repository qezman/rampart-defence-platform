variable "environment" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "public_subnet_ids" {
  type = list(string)
}

variable "private_subnet_ids" {
  type = list(string)
}

variable "db_endpoint" {
  type = string
}

variable "db_name" {
  type = string
}

variable "db_username" {
  type = string
}

variable "db_password" {
  type      = string
  sensitive = true
}

variable "domain-name" {
  type = string
}

variable "frontend_image" {
  type    = string
  default = "nginx:latest"
}

variable "backend_image" {
  type    = string
  default = "nginx:latest"
}
variable "cert_validation_fqdns" {
  type    = list(string)
  default = []
}

variable "certificate_arn" {
  type    = string
  default = ""
}

variable "resend_api_key" {
  type      = string
  sensitive = true
}
