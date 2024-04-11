/** @odoo-module */

import { Component } from "@odoo/owl";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { usePos } from "@point_of_sale/app/store/pos_hook";


export class ClearButton extends Component {
    static template = "pos_order_line.ClearButton";
    setup() {
        this.pos = usePos();
    }
    async click() {
            const order = this.pos.get_order();
            while (order.orderlines.length > 0) {
                order.removeOrderline(order.get_last_orderline())
            }
    }
}

ProductScreen.addControlButton({
    component: ClearButton,
    condition: function () {
        return true;
    },
});