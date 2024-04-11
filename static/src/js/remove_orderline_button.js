/** @odoo-module */

import { usePos } from "@point_of_sale/app/store/pos_hook";
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { patch } from "@web/core/utils/patch";

patch(Orderline.prototype, {
    setup() {
        this.pos = usePos();
    },
    async clear(){
        const order = this.pos.get_order();
        var product = this.props.line.productName
        order.orderlines.forEach(function(line) {
            if (product == line.full_product_name) {
                order.removeOrderline(line)
            }
        });
    }
});