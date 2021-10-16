const mapjson = `{
    "type": "Topology",
    "objects": {
        "collection": {
            "type": "GeometryCollection",
            "geometries": [
                {
                    "type": "Polygon",
                    "id": "0eebf703-e8cd-40af-9ea3-16a1cb30a6b7",
                    "arcs": [
                        [
                            0,
                            1,
                            2
                        ]
                    ]
                },
                {
                    "type": "Polygon",
                    "id": "525fe322-3d34-4291-9cdb-8df16ad0e43b",
                    "arcs": [
                        [
                            -2,
                            3
                        ]
                    ]
                },
                {
                    "type": "Polygon",
                    "id": "8f9da71e-93ee-449f-96f3-d94560a555ad",
                    "arcs": [
                        [
                            4,
                            5
                        ]
                    ]
                },
                {
                    "type": "Polygon",
                    "id": "eff5e764-9a8c-4ec1-b3a4-2acd29b1b79b",
                    "arcs": [
                        [
                            6,
                            7
                        ]
                    ]
                }
            ]
        }
    },
    "arcs": [
        [
            [
                6315,
                8385
            ],
            [
                -3721,
                -1923
            ]
        ],
        [
            [
                2594,
                6462
            ],
            [
                2819,
                -3833
            ]
        ],
        [
            [
                5413,
                2629
            ],
            [
                4586,
                4378
            ],
            [
                -3684,
                1378
            ]
        ],
        [
            [
                2594,
                6462
            ],
            [
                -1166,
                -6462
            ],
            [
                3985,
                2629
            ]
        ],
        [
            [
                2594,
                6462
            ],
            [
                1699,
                874
            ],
            [
                -3692,
                1104
            ]
        ],
        [
            [
                601,
                8440
            ],
            [
                -601,
                -773
            ],
            [
                2405,
                -2431
            ],
            [
                189,
                1226
            ]
        ],
        [
            [
                601,
                8440
            ],
            [
                3727,
                -1086
            ],
            [
                1987,
                1031
            ]
        ],
        [
            [
                6315,
                8385
            ],
            [
                -4623,
                1614
            ],
            [
                -1091,
                -1559
            ]
        ]
    ],
    "bbox": [
        -81.260852,
        -51.589187,
        -34.529972,
        12.127885
    ],
    "transform": {
        "scale": [
            0.0046735553555355535,
            0.006372344434443444
        ],
        "translate": [
            -81.260852,
            -51.589187
        ]
    }
}`;

const geoJson = `{
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "shape": "Polygon",
            "name": "Unnamed Layer",
            "category": "default"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [-34.529972, -6.935334],
                    [-51.746612, 1.841759],
                    [-69.138932, -10.412306],
                    [-55.962932, -34.836265],
                    [-34.529972, -6.935334]
                ]
            ]
        },
        "id": "0eebf703-e8cd-40af-9ea3-16a1cb30a6b7"
    }, {
        "type": "Feature",
        "properties": {
            "shape": "Polygon",
            "name": "Unnamed Layer",
            "category": "default"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [-55.962932, -34.836265],
                    [-69.138932, -10.412306],
                    [-74.585012, -51.589187],
                    [-55.962932, -34.836265]
                ]
            ]
        },
        "id": "525fe322-3d34-4291-9cdb-8df16ad0e43b"
    }, {
        "type": "Feature",
        "properties": {
            "shape": "Polygon",
            "name": "Unnamed Layer",
            "category": "default"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [-70.018936, -18.226217],
                    [-69.138932, -10.412306],
                    [-61.19894, -4.843528],
                    [-78.449972, 2.193317],
                    [-81.260852, -2.729983],
                    [-70.018936, -18.226217]
                ]
            ]
        },
        "id": "8f9da71e-93ee-449f-96f3-d94560a555ad"
    }, {
        "type": "Feature",
        "properties": {
            "shape": "Polygon",
            "name": "Unnamed Layer",
            "category": "default"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [-78.449972, 2.193317],
                    [-61.033048, -4.726501],
                    [-51.746612, 1.841759],
                    [-73.355252, 12.127885],
                    [-78.449972, 2.193317]
                ]
            ]
        },
        "id": "eff5e764-9a8c-4ec1-b3a4-2acd29b1b79b"
    }]
}`;
