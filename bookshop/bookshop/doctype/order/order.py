# Copyright (c) 2025, Carvemylife Coaching Services Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Order(Document):
    def validate(self):
        # Add your validation logic here
        frappe.msgprint("Validation logic executed for Order")
        # Example: Check if a required field is empty
        if not self.customer:
            frappe.throw("Customer name is required")

        