# -*- coding: utf-8 -*-
{
    'name': "Remove Orderline",
    'version': '17.0.1.0.0',
    'depends': ['point_of_sale'],
    'category': '',
    'description': """
    summary of this app
    """,
    'data': [
             ],
    'assets': {
        'point_of_sale._assets_pos': [
            'remove_orderline/static/src/xml/remove_button.xml',
            'remove_orderline/static/src/xml/remove_product_orderline.xml',
            'remove_orderline/static/src/js/remove_button.js',
            'remove_orderline/static/src/js/remove_orderline_button.js',
        ],
    },
    'application': 'True',
    'installable': True,
}