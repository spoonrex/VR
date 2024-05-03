var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "穿堂",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1534839298172717,
          "pitch": 0.11244335385469029,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -0.365104045872112,
          "pitch": 0.15502369469393606,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7324518115407024,
          "pitch": 0.15172254338198954,
          "title": "穿堂",
          "text": "社團練習<div>躲避球</div><div>磁磚雨</div>"
        }
      ]
    },
    {
      "id": "1-",
      "name": "中庭",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8231032037362311,
          "pitch": 0.06651161208453438,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.635794957846624,
          "pitch": 0.18961539375924374,
          "title": "中庭",
          "text": "園遊會擺攤"
        }
      ]
    },
    {
      "id": "2-",
      "name": "游泳池",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5419829391250568,
          "pitch": 0.09822691385136295,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": 1.938215957223652,
          "pitch": 0.06673288596795857,
          "rotation": 0.7853981633974483,
          "target": "0-"
        },
        {
          "yaw": 1.8354700326361684,
          "pitch": -0.03244005987487064,
          "rotation": 3.9269908169872414,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08119200741921517,
          "pitch": 0.26708806253883566,
          "title": "游泳池",
          "text": "游泳比賽<div>洗澡</div>"
        }
      ]
    },
    {
      "id": "3-",
      "name": "活二",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1211668962773054,
          "pitch": 0.13951883164162027,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": 2.1185007598148697,
          "pitch": 0.2455559990386913,
          "rotation": 3.141592653589793,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8341643568121491,
          "pitch": 0.807426402621072,
          "title": "活動中心二樓",
          "text": "合唱比賽<div>社團辦公室</div><div>社團練習</div>"
        }
      ]
    },
    {
      "id": "4-",
      "name": "活五",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.220243437764829,
          "pitch": -0.04310434835071142,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5148060373241883,
          "pitch": 0.23770414508165416,
          "title": "活動中心五樓",
          "text": "體育課<div>籃球隊練習</div>"
        }
      ]
    }
  ],
  "name": "sport center",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
