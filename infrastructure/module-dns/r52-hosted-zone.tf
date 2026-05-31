resource "aws_route53_zone" "r53_zone" {
  name          = var.domain-name
  comment       = "Managed by Terraform"
  force_destroy = true

  tags = {
    Name        = "${var.environment}-hosted-zone"
    Environment = var.environment
  }
}

resource "aws_route53_record" "frontend" {
  zone_id = aws_route53_zone.r53_zone.zone_id
  name    = var.domain-name
  type    = "A"

  alias {
    name                   = var.alb_dns_name
    zone_id                = var.alb_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "backend" {
  zone_id = aws_route53_zone.r53_zone.zone_id
  name    = "api.${var.domain-name}"
  type    = "A"

  alias {
    name                   = var.alb_dns_name
    zone_id                = var.alb_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "resend_dkim" {
  zone_id = aws_route53_zone.r53_zone.zone_id
  name    = "resend._domainkey.${var.domain-name}"
  type    = "TXT"
  ttl     = 300
  records = ["p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5A071n9rq6Iufw/GKwO0CfToj65KU1+cKucv5XN2Hfe6NRziehvAff7ZdNCFtFkd3QWOH5a5KoLssZgAM817xMAXqNP1h9IEzjqo0cnoyx1NpDOlXyxtOl6hePDFKJuBl/+mJyDH4rqudCGW/+Ek74phfFugTsWoIsGWxWX4CLQIDAQAB"]
}

resource "aws_route53_record" "resend_mx" {
  zone_id = aws_route53_zone.r53_zone.zone_id
  name    = "send.${var.domain-name}"
  type    = "MX"
  ttl     = 300
  records = ["10 feedback-smtp.eu-west-1.amazonses.com"]
}

resource "aws_route53_record" "resend_spf" {
  zone_id = aws_route53_zone.r53_zone.zone_id
  name    = "send.${var.domain-name}"
  type    = "TXT"
  ttl     = 300
  records = ["v=spf1 include:amazonses.com ~all"]
}

resource "aws_route53_record" "resend_dmarc" {
  zone_id = aws_route53_zone.r53_zone.zone_id
  name    = "_dmarc.${var.domain-name}"
  type    = "TXT"
  ttl     = 300
  records = ["v=DMARC1; p=none;"]
}
