Vue.createApp({
  data: function () {
    return {
      items: [],
      prices: [
        {
          id: 1,
          text: "アナログ（りゅうず）",
          ortag: "アC"
        },
        {
          id: 2,
          text: "アナログ（ボタン）",
          ortag: "アB"
        },
        {
          id: 3,
          text: "コンビ（りゅうず）",
          ortag: "コC"
        },
        {
          id: 4,
          text: "コンビ（ボタン）",
          ortag: "コB"
        },
        {
          id: 5,
          text: "デジタル",
          ortag: "デジ"
        }
      ],
      pokes: [
        {
          id: 1,
          text: "ストップウオッチ",
          tag: "ストップウオッチ"
        },
        {
          id: 2,
          text: "ワールドタイム",
          tag: "ワールドタイム"
        },
        {
          id: 3,
          text: "アラーム",
          tag: "アラーム"
        },
        {
          id: 4,
          text: "タイマー",
          tag: "タイマー"
        },
        {
          id: 5,
          text: "デュアルタイム",
          tag: "デュアルタイム"
        }
      ],
      solars: [
        {
          id: 1,
          text: "搭載",
          tag: "ソーラー搭載",
        },
        {
          id: 2,
          text: "非搭載",
          tag: "ソーラー非搭載"
        }
      ],
      collapses: [
        {
          id: 10,
          text: "節電レベル1（表示スリープ）＋節電レベル2（機能スリープ）",
          tag: "節電レベル1"
        },
        {
          id: 11,
          text: "節電レベル2（機能スリープ）のみ",
          tag: "節電レベル2"
        }
      ],
      dijifuns: [
        {
          "id": 20,
          "text": "針退避機能",
          "tag": "針退避機能"
        },
        {
          "id": 21,
          "text": "報音フラッシュ機能",
          "tag": "報音フラッシュ有"
        },
        {
          "id": 22,
          "text": "バイブレーション機能",
          "tag": "バイブ有"
        },
        {
          "id": 23,
          "text": "グラフィックあり",
          "tag": "グラフィック有"
        }
      ],
      keisokuhanis: [
        {
          "id": 24,
          "text": "10分",
          "tag": "120m/100m/60m/30m/10m"
        },
        {
          "id": 25,
          "text": "30分",
          "tag": "120m/100m/60m/30m/10m"
        },
        {
          "id": 26,
          "text": "60分",
          "tag": "120m/100m/60m/30m/10m"
        },
        {
          "id": 27,
          "text": "100分",
          "tag": "120m/100m/60m/30m/10m"
        },
        {
          "id": 28,
          "text": "120分",
          "tag": "120m/100m/60m/30m/10m"
        },
        {
          "id": 29,
          "text": "24時間",
          "tag": "100h/24h"
        },
        {
          "id": 30,
          "text": "100時間",
          "tag": "100h/24h"
        }
      ],
      keisokutanis: [
        {
          "id": 31,
          "text": "1/10秒",
          "tag": "計測単位1/10秒"
        },
        {
          "id": 32,
          "text": "1秒",
          "tag": "計測単位1秒"
        }
      ],
      settanis: [
        {
          "id": 33,
          "text": "秒",
          "tag": "設定単位秒"
        },
        {
          "id": 34,
          "text": "分",
          "tag": "設定単位分"
        }
      ],
      timeupsoundtimes: [
        {
          "id": 35,
          "text": "10秒",
          "tag": "報音10秒"
        },
        {
          "id": 36,
          "text": "20秒",
          "tag": "報音20秒"
        }
      ],
      timersetanalogs: [
        {
          "id": 37,
          "text": "りゅうず引き",
          "tag": "りゅうず引き"
        },
        {
          "id": 38,
          "text": "セット押し無し",
          "tag": "セット押し無し"
        },
        {
          "id": 39,
          "text": "長押し（Hold）",
          "tag": "長押し（Hold）"
        }
      ],
      timersetcombs: [
        {
          "id": 40,
          "text": "りゅうず引き",
          "tag": "りゅうず引き"
        },
        {
          "id": 41,
          "text": "りゅうず引き無し",
          "tag": "りゅうず引き無し"
        },
        {
          "id": 42,
          "text": "セット押し無し",
          "tag": "セット押し無し"
        },
        {
          "id": 43,
          "text": "単押し（ワンプッシュ）",
          "tag": "単押し（ワンプッシュ）"
        },
        {
          "id": 44,
          "text": "長押し（Hold）",
          "tag": "長押し（Hold）"
        }
      ],
      timersetcombdisplays: [
        {
          "id": 45,
          "text": "表示無し",
          "tag": "表示無し"
        },
        {
          "id": 46,
          "text": "SET Hold",
          "tag": "SET Hold"
        },
        {
          "id": 47,
          "text": "Hold",
          "tag": "Hold"
        },
        {
          "id": 48,
          "text": "Hold SET",
          "tag": "Hold SET"
        }
      ],
      timersetdigis: [
        {
          "id": 49,
          "text": "セット押し無し",
          "tag": "セット押し無し"
        },
        {
          "id": 50,
          "text": "単押し（ワンプッシュ）",
          "tag": "単押し（ワンプッシュ）"
        },
        {
          "id": 51,
          "text": "長押し（Hold）",
          "tag": "長押し（Hold）"
        }
      ],
      autorepeats: [
        {
          "id": 52,
          "text": "有",
          "tag": "オートリピート有"
        },
        {
          "id": 53,
          "text": "無",
          "tag": "オートリピート無"
        }
      ],
      autorepeattimes: [
        {
          "id": 54,
          "text": "無",
          "tag": "リピート制限無"
        },
        {
          "id": 55,
          "text": "８回",
          "tag": "リピート制限8回"
        },
        {
          "id": 56,
          "text": "10回",
          "tag": "リピート制限10回"
        }
      ],
      psounds: [
        {
          "id": 57,
          "text": "有",
          "tag": "予告音有"
        },
        {
          "id": 58,
          "text": "無",
          "tag": "予告音無"
        }
      ],
      psoundpatterns: [
        {
          "id": 59,
          "text": "5分（10秒）→４分→３分→２分→１分→30秒→10→9→・・・→2→1",
          "tag": "予告音パタ5分"
        },
        {
          "id": 60,
          "text": "10分→5分→４分→３分→２分→１分→50秒→40秒→30秒→20秒→10秒→5→4→3→2→1",
          "tag": "予告音パタ10分"
        }
      ],
      directstarts: [
        {
          "id": 61,
          "text": "有",
          "tag": "ダイレクトスタート有"
        },
        {
          "id": 62,
          "text": "無",
          "tag": "ダイレクトスタート無"
        }
      ],
      elapsedtimes: [
        {
          "id": 63,
          "text": "有",
          "tag": "経過計測有"
        },
        {
          "id": 64,
          "text": "無",
          "tag": "経過計測無"
        }
      ],
      elapsedtimepatterns: [
        {
          "id": 65,
          "text": "1秒単位24時間計測",
          "tag": "経過パタ24時間"
        },
        {
          "id": 66,
          "text": "1秒単位60分計測",
          "tag": "経過パタ60分"
        }
      ],
      selected: '',
      checked02: '',
      checked03: [],
      checkedbasic01: '',
      checkedbasic02: '',
      checkedbasic03: [],
      checkedTimer01: '',
      checkedTimer02: '',
      checkedTimer03: '',
      checkedTimer05: '',
      checkedTimer06: '',
      checkedTimer07: '',
      checkedTimer08: '',
      checkedTimer09: '',
      checkedTimer10: '',
      checkedTimer11: '',
      checkedTimer12: '',
      checkedTimer13: '',
      checkedTimer14: '',
      checkedTimer15: '',
      checkedTimer16: '',
      checkedTimer17: '',

      filterText2: [''],
      filterText1: [''],
      filterText: ['']

      // checkedNames: ['all'],
      // checkedNames: []
    }
  },
  computed: {
     matched: function () {
        return this.items.filter(el => {
          if (_.includes(this.filterText, 'all')) return true;
          else if (_.intersection(this.filterText1, el.ortags).length > 0 && _.intersection(this.filterText, el.tags).length === el.tags.length) return true;
          // else if (_.intersection(this.filterText, el.tags).length === el.tags.length) return true;
          // else if (_.intersection(this.checkedNames, el.tags).length === el.tags.length) return true;
          // else if (_.intersection(this.filterText, el.tags).length > 0) return true;
          else return false;
        })
      },
      sorted: function () {
        if (this.selected === '') {
          const self = this
          axios.get("./item.json").then(function (response) {
            self.items = response.data
          })
          return _.orderBy(this.matched, 'date', 'desc')
        } else if (this.selected === '人気順') {
          return _.orderBy(this.matched, 'view', 'desc')
        } else {
          return this.matched;
        }
      }
    },
    methods: {
      submitText: function () {
        this.filterText1.push(this.checked02)
        this.filterText = this.checked03, this.checkedbasic03
        // this.filterText = this.checkedbasic03
        this.filterText.push(this.checkedbasic01, this.checkedbasic02, this.checkedTimer01, this.checkedTimer02, this.checkedTimer03, this.checkedTimer05, this.checkedTimer06, this.checkedTimer07, this.checkedTimer08, this.checkedTimer09, this.checkedTimer10, this.checkedTimer11, this.checkedTimer12, this.checkedTimer13, this.checkedTimer14, this.checkedTimer15, this.checkedTimer16, this.checkedTimer17)

      },
      formclear: function () {
        this.filterText1.splice(0, this.filterText1.length)
        this.filterText.splice(0, this.filterText.length)
        // this.filterText.push(...[''])
        this.checked02 = ''
        this.checkedbasic01 = ''
        this.checkedbasic02 = ''
        this.checkedTimer01 = ''
        this.checkedTimer02 = ''
        this.checkedTimer03 = ''
        this.checkedTimer05 = ''
        this.checkedTimer06 = ''
        this.checkedTimer07 = ''
        this.checkedTimer08 = ''
        this.checkedTimer09 = ''
        this.checkedTimer10 = ''
        this.checkedTimer11 = ''
        this.checkedTimer12 = ''
        this.checkedTimer13 = ''
        this.checkedTimer14 = ''
        this.checkedTimer15 = ''
        this.checkedTimer16 = ''
        this.checkedTimer17 = ''

      },
      unitall: function () {
        this.filterText.splice(0, this.filterText.length)
        this.filterText.push(...['all'])
      },
      // item: function () {
      //   const self = this
      //   axios.get("./item.json").then(function (response) {
      //     self.items = response.data
      //   })
      // if (this.selected === '新着順') {
      //   return _.orderBy(this.matched, 'date', 'desc')
      // } else if (this.selected === '人気順') {
      //   return _.orderBy(this.matched, 'view', 'desc')
      // } else {
      //   return this.matched;
      // }
      // },
      // 検索条件を初期化する
      // initialize: function () {
      //   this.filterText = ""
      //   this.filterPriceId = undefined
      // }
    },
    mounted: function () {
      // アプリケーションが立ち上がったら商品一覧を取得する
      this.sorted()
    }
  }).mount("#app")
