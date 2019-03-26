export const state = () => ({
  // see http://www.pref.mie.lg.jp/common/content/000151581.pdf
  // implemented by Adjacency list model
  list: [
    {
      id: 1,
      code: 'A',
      name: '農業、林業',
      parent_id: null
    },
    {
      id: 2,
      code: '01',
      name: '農業',
      parent_id: 1
    },
    {
      id: 3,
      code: '02',
      name: '林業',
      parent_id: 1
    },
    {
      id: 4,
      code: 'B',
      name: '漁業',
      parent_id: null
    },
    {
      id: 5,
      code: '03',
      name: '漁業（水産養殖業を除く）',
      parent_id: 4
    },
    {
      id: 6,
      code: '04',
      name: '水産養殖業',
      parent_id: 4
    },
    {
      id: 7,
      code: 'C',
      name: '鉱業、採石業、砂利採取業',
      parent_id: null
    },
    {
      id: 8,
      code: '05',
      name: '鉱業、採石業、砂利採取業',
      parent_id: 7
    },
    {
      id: 9,
      code: 'D',
      name: '建設業',
      parent_id: null
    },
    {
      id: 10,
      code: '06',
      name: '総合工事業',
      parent_id: 9
    },
    {
      id: 11,
      code: '07',
      name: '職別工事業（設備工事業を除く）',
      parent_id: 9
    },
    {
      id: 12,
      code: '08',
      name: '設備工事業',
      parent_id: 9
    },
    {
      id: 13,
      code: 'E',
      name: '製造業',
      parent_id: null
    },
    {
      id: 14,
      code: '09',
      name: '食料品製造業',
      parent_id: 13
    },
    {
      id: 15,
      code: '10',
      name: '飲料・たばこ・飼料製造業',
      parent_id: 13
    },
    {
      id: 16,
      code: '11',
      name: '繊維工業',
      parent_id: 13
    },
    {
      id: 17,
      code: '12',
      name: '木材・木製品製造業（家具を除く）',
      parent_id: 13
    },
    {
      id: 18,
      code: '13',
      name: '家具・装備品製造業',
      parent_id: 13
    },
    {
      id: 19,
      code: '14',
      name: 'パルプ・紙・紙加工品製造業',
      parent_id: 13
    },
    {
      id: 20,
      code: '15',
      name: '印刷・同関連業',
      parent_id: 13
    },
    {
      id: 21,
      code: '16',
      name: '化学工業',
      parent_id: 13
    },
    {
      id: 22,
      code: '17',
      name: '石油製品・石炭製品製造業',
      parent_id: 13
    },
    {
      id: 23,
      code: '18',
      name: 'プラスチック製品製造業（別掲を除く）',
      parent_id: 13
    },
    {
      id: 24,
      code: '19',
      name: 'ゴム製品製造業',
      parent_id: 13
    },
    {
      id: 25,
      code: '20',
      name: 'なめし革・同製品・毛皮製造業',
      parent_id: 13
    },
    {
      id: 26,
      code: '21',
      name: '窯業・土石製品製造業',
      parent_id: 13
    },
    {
      id: 27,
      code: '22',
      name: '鉄鋼業',
      parent_id: 13
    },
    {
      id: 28,
      code: '23',
      name: '非鉄金属製造業',
      parent_id: 13
    },
    {
      id: 29,
      code: '24',
      name: '金属製品製造業',
      parent_id: 13
    },
    {
      id: 30,
      code: '25',
      name: 'はん用機械器具製造業',
      parent_id: 13
    },
    {
      id: 31,
      code: '26',
      name: '生産用機械器具製造業',
      parent_id: 13
    },
    {
      id: 32,
      code: '27',
      name: '業務用機械器具製造業',
      parent_id: 13
    },
    {
      id: 33,
      code: '28',
      name: '電子部品・デバイス・電子回路製造業',
      parent_id: 13
    },
    {
      id: 34,
      code: '29',
      name: '電気機械器具製造業',
      parent_id: 13
    },
    {
      id: 35,
      code: '30',
      name: '情報通信機械器具製造業',
      parent_id: 13
    },
    {
      id: 36,
      code: '31',
      name: '輸送用機械器具製造業',
      parent_id: 13
    },
    {
      id: 37,
      code: '32',
      name: 'その他の製造業',
      parent_id: 13
    },
    {
      id: 38,
      code: 'F',
      name: '電気・ガス・熱供給・水道業',
      parent_id: null
    },
    {
      id: 39,
      code: '33',
      name: '電気業',
      parent_id: 38
    },
    {
      id: 40,
      code: '34',
      name: 'ガス業',
      parent_id: 38
    },
    {
      id: 41,
      code: '35',
      name: '熱供給業',
      parent_id: 38
    },
    {
      id: 42,
      code: '36',
      name: '水道業',
      parent_id: 38
    },
    {
      id: 43,
      code: 'G',
      name: '情報通信業',
      parent_id: null
    },
    {
      id: 44,
      code: '37',
      name: '通信業',
      parent_id: 43
    },
    {
      id: 45,
      code: '38',
      name: '放送業',
      parent_id: 43
    },
    {
      id: 46,
      code: '39',
      name: '情報サービス業',
      parent_id: 43
    },
    {
      id: 47,
      code: '40',
      name: 'インターネット付随サービス業',
      parent_id: 43
    },
    {
      id: 48,
      code: '41',
      name: '映像・音声・文字情報制作業',
      parent_id: 43
    },
    {
      id: 49,
      code: 'H',
      name: '運輸業、郵便業',
      parent_id: null
    },
    {
      id: 50,
      code: '42',
      name: '鉄道業',
      parent_id: 49
    },
    {
      id: 51,
      code: '43',
      name: '道路旅客運送業',
      parent_id: 49
    },
    {
      id: 52,
      code: '44',
      name: '道路貨物運送業',
      parent_id: 49
    },
    {
      id: 53,
      code: '45',
      name: '水運業',
      parent_id: 49
    },
    {
      id: 54,
      code: '46',
      name: '航空運輸業',
      parent_id: 49
    },
    {
      id: 55,
      code: '47',
      name: '倉庫業',
      parent_id: 49
    },
    {
      id: 56,
      code: '48',
      name: '運輸に付帯するサービス業',
      parent_id: 49
    },
    {
      id: 57,
      code: '49',
      name: '郵便業（信書便事業を含む）',
      parent_id: 49
    },
    {
      id: 58,
      code: 'I',
      name: '卸売業・小売業',
      parent_id: null
    },
    {
      id: 59,
      code: '50',
      name: '各種商品卸売業',
      parent_id: 58
    },
    {
      id: 60,
      code: '51',
      name: '繊維・衣服等卸売業',
      parent_id: 58
    },
    {
      id: 61,
      code: '52',
      name: '飲食料品卸売業',
      parent_id: 58
    },
    {
      id: 62,
      code: '53',
      name: '建築材料、鉱物、金属材料等卸売業',
      parent_id: 58
    },
    {
      id: 63,
      code: '54',
      name: '機械器具卸売業',
      parent_id: 58
    },
    {
      id: 64,
      code: '55',
      name: 'その他の卸売業',
      parent_id: 58
    },
    {
      id: 65,
      code: '56',
      name: '各種商品小売業',
      parent_id: 58
    },
    {
      id: 66,
      code: '57',
      name: '繊維・衣服等小売業',
      parent_id: 58
    },
    {
      id: 67,
      code: '58',
      name: '飲食料品小売業',
      parent_id: 58
    },
    {
      id: 68,
      code: '59',
      name: '機械器具小売業',
      parent_id: 58
    },
    {
      id: 69,
      code: '60',
      name: 'その他の小売業',
      parent_id: 58
    },
    {
      id: 70,
      code: '61',
      name: '無店舗小売業',
      parent_id: 58
    },
    {
      id: 71,
      code: 'J',
      name: '金融業・保険業',
      parent_id: null
    },
    {
      id: 72,
      code: '62',
      name: '銀行業',
      parent_id: 71
    },
    {
      id: 73,
      code: '63',
      name: '共同組織金融業',
      parent_id: 71
    },
    {
      id: 74,
      code: '64',
      name: '貸金業、クレジットカード業等非預金信用機関',
      parent_id: 71
    },
    {
      id: 75,
      code: '65',
      name: '金融商品取引業、商品先物取引業',
      parent_id: 71
    },
    {
      id: 76,
      code: '66',
      name: '補助的金融業等',
      parent_id: 71
    },
    {
      id: 77,
      code: '67',
      name: '保険業（保険媒介代理業、保険サービス業を含む）',
      parent_id: 71
    },
    {
      id: 78,
      code: 'K',
      name: '不動産業、物品賃貸業',
      parent_id: null
    },
    {
      id: 79,
      code: '68',
      name: '不動産取引業',
      parent_id: 78
    },
    {
      id: 80,
      code: '69',
      name: '不動産賃貸業・管理業',
      parent_id: 78
    },
    {
      id: 81,
      code: '70',
      name: '物品賃貸業',
      parent_id: 78
    },
    {
      id: 82,
      code: 'L',
      name: '学術研究、専門・技術サービス業',
      parent_id: null
    },
    {
      id: 83,
      code: '71',
      name: '学術・開発研究機関',
      parent_id: 82
    },
    {
      id: 84,
      code: '72',
      name: '専門サービス業（他に分類されないもの）',
      parent_id: 82
    },
    {
      id: 85,
      code: '73',
      name: '広告業',
      parent_id: 82
    },
    {
      id: 86,
      code: '74',
      name: '技術サービス業（他に分類されないもの）',
      parent_id: 82
    },
    {
      id: 87,
      code: 'M',
      name: '宿泊業、飲食サービス業',
      parent_id: null
    },
    {
      id: 88,
      code: '75',
      name: '宿泊業',
      parent_id: 87
    },
    {
      id: 89,
      code: '76',
      name: '飲食店',
      parent_id: 87
    },
    {
      id: 90,
      code: '77',
      name: '持ち帰り・配達飲食サービス業',
      parent_id: 87
    },
    {
      id: 91,
      code: 'N',
      name: '生活関連サービス業、娯楽業',
      parent_id: null
    },
    {
      id: 92,
      code: '78',
      name: '洗濯・理容・美容・浴場業',
      parent_id: 91
    },
    {
      id: 93,
      code: '79',
      name: 'その他の生活関連サービス業',
      parent_id: 91
    },
    {
      id: 94,
      code: '80',
      name: '娯楽業',
      parent_id: 91
    },
    {
      id: 95,
      code: 'O',
      name: '教育、学習支援業',
      parent_id: null
    },
    {
      id: 96,
      code: '81',
      name: '学校教育',
      parent_id: 95
    },
    {
      id: 97,
      code: '82',
      name: 'その他の教育、学習支援業',
      parent_id: 95
    },
    {
      id: 98,
      code: 'P',
      name: '医療、福祉',
      parent_id: null
    },
    {
      id: 99,
      code: '83',
      name: '医療業',
      parent_id: 98
    },
    {
      id: 100,
      code: '84',
      name: '保険衛生',
      parent_id: 98
    },
    {
      id: 101,
      code: '85',
      name: '社会保険・社会福祉・介護事業',
      parent_id: 98
    },
    {
      id: 102,
      code: 'Q',
      name: '複合サービス事業',
      parent_id: null
    },
    {
      id: 103,
      code: '86',
      name: '郵便局',
      parent_id: 102
    },
    {
      id: 104,
      code: '87',
      name: '協同組合（他に分類されないもの）',
      parent_id: 102
    },
    {
      id: 105,
      code: 'R',
      name: 'サービス業（他に分類されるものを除く）',
      parent_id: null
    },
    {
      id: 106,
      code: '88',
      name: '廃棄物処理業',
      parent_id: 105
    },
    {
      id: 107,
      code: '89',
      name: '自動車整備業',
      parent_id: 105
    },
    {
      id: 108,
      code: '90',
      name: '機械等修理業',
      parent_id: 105
    },
    {
      id: 109,
      code: '91',
      name: '職業紹介・労働者派遣業',
      parent_id: 105
    },
    {
      id: 110,
      code: '92',
      name: 'その他の事業サービス業',
      parent_id: 105
    },
    {
      id: 111,
      code: '93',
      name: '政治・経済・文化団体',
      parent_id: 105
    },
    {
      id: 112,
      code: '94',
      name: '宗教',
      parent_id: 105
    },
    {
      id: 113,
      code: '95',
      name: 'その他のサービス業',
      parent_id: 105
    },
    {
      id: 114,
      code: '96',
      name: '外国公務',
      parent_id: 105
    },
    {
      id: 115,
      code: 'S',
      name: '公務（他に分類されるものを除く）',
      parent_id: null
    },
    {
      id: 116,
      code: '97',
      name: '国家公務',
      parent_id: 115
    },
    {
      id: 117,
      code: '98',
      name: '地方公務',
      parent_id: 115
    },
    {
      id: 118,
      code: 'T',
      name: '分類不能の産業',
      parent_id: null
    },
    {
      id: 119,
      code: '99',
      name: '分類不能の作業',
      parent_id: 118
    }
  ]
})

export const getters = {
  normalize: function (state) {
    const categories = []
    state.list.forEach(element => {
      const category = {}
      if (element.parent_id === null) {
        category.id = element.id
        category.value = element.code
        category.label = `${element.code}-${element.name}`
        categories.push(category)
      } else {
        const parent = categories.find(mainElement => {
          return mainElement.id === element.parent_id
        })
        if (parent.children === undefined) {
          parent.children = []
        }

        category.id = element.id
        category.value = element.code
        category.label = `${element.code}-${element.name}`
        parent.children.push(category)
      }
    })
    return categories
  }
}
