variable "vpc_cidrblock" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "192.168.0.0/16"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "create_subnet" {
  description = "Flag to create a subnet"
  type        = bool
  default     = true
}

variable "countsub" {
  description = "Number of subnets to create"
  type        = number
  default     = 2
}

variable "create_elastic_ip" {
  description = "Flag to create Elastic IPs"
  type        = bool
  default     = true
}

variable "domain-name" {
  description = "Domain name"
  type        = string
  default     = "qossim005.online"
}

variable "email" {
  description = "Email for SSL certificates"
  type        = string
  default     = "holaryinka5050@gmail.com"
}

variable "db_instance_class" {
  description = "Instance class for RDS"
  type        = string
  default     = "db.t3.micro"
}

variable "db_allocated_storage" {
  description = "Storage for DB in GB"
  type        = number
  default     = 20
}

variable "db_username" {
  description = "Database username"
  type        = string
  default     = "admin"
}

variable "db_password" {
  description = "Database password"
  type        = string
  default     = "Kazeem2026Secure"
  sensitive   = true
}

variable "db_name" {
  description = "Database name"
  type        = string
  default     = "appdb"
}

variable "frontend_image" {
  description = "Docker image for frontend"
  type        = string
  default     = "nginx:latest"
}

variable "backend_image" {
  description = "Docker image for backend"
  type        = string
  default     = "nginx:latest"
}

variable "certificate_arn" {
  type    = string
  default = ""
}

variable "resend_api_key" {
  description = "API key for Resend email service"
  type        = string
  sensitive   = true
}
