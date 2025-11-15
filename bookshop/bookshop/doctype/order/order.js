// Copyright (c) 2025, IDML and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Order", {
// 	refresh(frm) {

// 	},
// });
// For license information, please see license.txt

frappe.ui.form.on("Order", {
    onload(frm) {
        frm.set_value('total_price', frm.doc.quantity * frm.doc.unit_price);
    },
    quantity(frm) {
        frm.set_value('total_price', frm.doc.quantity * frm.doc.unit_price);
    }
});