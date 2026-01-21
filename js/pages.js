// ページコンテンツとブログ記事データを管理するモジュール
const Pages = {
  // 広告URL一括管理リスト
  // 各記事の広告リンクをここで管理できます
  adUrls: {
    "morning-routine":
      "https://ads-tracker-api.onrender.com/cl/03ecb94c721d?bid=a225b36ff7f5b597e042d2d8", // 朝の習慣で人生が変わる
    "quick-recipes":
      "https://ads-tracker-api.onrender.com/cl/3e4f4bc11e4f?bid=b78aca52583ab3dbc43e9618", // 簡単で美味しい時短レシピ
    "stress-relief":
      "https://ads-tracker-api.onrender.com/cl/2843acffe6f6?bid=c53ed022a18055d22867ca52", // ストレス解消法10選
    "remote-work-productivity":
      "https://ads-tracker-api.onrender.com/cl/9b8b317e8151?bid=360982eb0377f7b6243c93f3", // 在宅ワークの生産性向上術
    "weekend-travel":
      "https://ads-tracker-api.onrender.com/cl/f41630fa796c?bid=d74166df5545bf5209b4a134", // 週末に行ける国内旅行スポット
    "yoga-guide":
      "https://ads-tracker-api.onrender.com/cl/e1886543ae87?bid=a6d37e23bd00ac4a19e453ac", // 初心者向けヨガガイド
    "reading-habit":
      "https://ads-tracker-api.onrender.com/cl/f6e067d56361?bid=18682064684b61fda5664490", // 読書習慣を身につける方法
    "frugal-lifestyle": "", // 節約しながら楽しむライフスタイル
    "digital-detox": "", // デジタルデトックスのすすめ
    "finding-hobbies": "", // 趣味を見つける10のヒント
  },

  // ブログ記事データ
  posts: [
    {
      id: "morning-routine",
      title: "朝の習慣で人生が変わる",
      icon: "📚",
      summary:
        "成功者が実践する朝のルーティンを紹介します。早起き、運動、瞑想など、人生を変える習慣を身につけましょう。",
      date: "2026年1月15日",
      category: "自己啓発",
      adTitle: "☕ プレミアムコーヒー定期便",
      adDescription:
        "朝の目覚めを最高にする厳選コーヒー豆を毎月お届け。初回限定特別価格でお試しいただけます。",
      adButtonText: "定期便の詳細を見る",
      content: `
        <p>朝の時間をどう過ごすかで、一日の質が大きく変わります。成功している人々の多くは、朝の時間を大切にし、自分なりのルーティンを持っています。</p>
        <h3>1. 早起きの習慣</h3>
        <p>朝5時に起きることで、静かな時間を確保できます。この時間は自分のために使える貴重な時間です。読書、運動、瞑想など、自己投資に最適です。</p>
        <h3>2. 朝の運動</h3>
        <p>軽いストレッチやジョギングで体を目覚めさせましょう。運動は脳を活性化し、一日のエネルギーを高めます。</p>
        <h3>3. 瞑想とマインドフルネス</h3>
        <p>10分間の瞑想で心を落ち着かせ、今日の目標を明確にします。マインドフルネスは集中力を高め、ストレスを軽減します。</p>
        <h3>4. 健康的な朝食</h3>
        <p>栄養バランスの取れた朝食で、体と脳にエネルギーを供給します。タンパク質、炭水化物、ビタミンをバランスよく摂取しましょう。</p>
        <p>これらの習慣を続けることで、人生が確実に変わっていきます。まずは一つから始めてみましょう。</p>
      `,
    },
    {
      id: "quick-recipes",
      title: "簡単で美味しい時短レシピ",
      icon: "🍳",
      summary:
        "忙しい日でも作れる栄養満点のレシピ集。15分以内で完成する美味しい料理をご紹介します。",
      date: "2026年1月16日",
      category: "料理",
      adTitle: "🗣️ オンライン英会話（初月50%OFF）",
      adDescription:
        "ネイティブ講師とマンツーマンレッスン。初月50%OFFで英語力を飛躍的に向上させましょう。",
      adButtonText: "無料体験レッスンを予約",
      content: `
        <p>忙しい毎日でも、美味しくて栄養のある食事を作りたいですよね。今回は15分以内で作れる時短レシピをご紹介します。</p>
        <h3>1. 鶏むね肉のガーリックソテー</h3>
        <p>鶏むね肉を薄く切り、ニンニクとオリーブオイルで焼くだけ。高タンパクで低カロリー、ダイエット中の方にもおすすめです。</p>
        <h3>2. 野菜たっぷりパスタ</h3>
        <p>冷蔵庫にある野菜を使って、簡単パスタ。トマトソースやオリーブオイルで和えるだけで、栄養満点の一品に。</p>
        <h3>3. 豆腐とアボカドのサラダ</h3>
        <p>豆腐とアボカドを角切りにして、醤油とごま油で和えます。タンパク質と良質な脂質が摂れる健康的なサラダです。</p>
        <h3>4. 卵とほうれん草の炒め物</h3>
        <p>ほうれん草と卵を炒めるだけの簡単レシピ。鉄分とタンパク質が豊富で、朝食にもぴったりです。</p>
        <p>時短レシピでも、栄養と美味しさは妥協しません。ぜひお試しください。</p>
      `,
    },
    {
      id: "stress-relief",
      title: "ストレス解消法10選",
      icon: "🧘",
      summary:
        "心と体をリフレッシュする方法をご紹介。日常生活で簡単に実践できるストレス解消テクニック。",
      date: "2026年1月17日",
      category: "健康",
      adTitle: "💪 フィットネスアプリ（30日間無料）",
      adDescription:
        "AIパーソナルトレーナーがあなた専用のプログラムを作成。30日間無料でお試しください。",
      adButtonText: "今すぐ無料で始める",
      content: `
        <p>現代社会ではストレスは避けられないものですが、適切に対処することで心身の健康を保つことができます。</p>
        <h3>1. 深呼吸とリラクゼーション</h3>
        <p>深呼吸は最も簡単で効果的なストレス解消法です。ゆっくりと深く呼吸することで、副交感神経が活性化し、リラックスできます。</p>
        <h3>2. 適度な運動</h3>
        <p>ウォーキングやヨガなどの軽い運動は、ストレスホルモンを減少させ、エンドルフィンを分泌させます。</p>
        <h3>3. 趣味の時間を持つ</h3>
        <p>好きなことに没頭する時間は、ストレスを忘れさせてくれます。読書、音楽、絵画など、自分の好きなことを楽しみましょう。</p>
        <h3>4. 十分な睡眠</h3>
        <p>質の良い睡眠は、ストレス回復に不可欠です。毎日7-8時間の睡眠を心がけましょう。</p>
        <h3>5. 自然と触れ合う</h3>
        <p>公園を散歩したり、自然の中で過ごす時間は、心を落ち着かせる効果があります。</p>
        <p>これらの方法を日常生活に取り入れて、ストレスフリーな生活を目指しましょう。</p>
      `,
    },
    {
      id: "remote-work-productivity",
      title: "在宅ワークの生産性向上術",
      icon: "💼",
      summary:
        "リモートワークで効率的に働くためのヒント。集中力を高め、仕事とプライベートのバランスを保つ方法。",
      date: "2026年1月18日",
      category: "仕事",
      adTitle: "💻 プログラミングスクール（初月70%OFF）",
      adDescription:
        "未経験から3ヶ月でエンジニアに。初月70%OFFの特別キャンペーン実施中！",
      adButtonText: "無料カウンセリングを予約",
      content: `
        <p>在宅ワークが普及する中、自宅で効率的に働くためのスキルがますます重要になっています。</p>
        <h3>1. 専用のワークスペースを作る</h3>
        <p>仕事専用のスペースを確保することで、オンとオフの切り替えがしやすくなります。できれば個室が理想的です。</p>
        <h3>2. 時間管理を徹底する</h3>
        <p>ポモドーロテクニックなどを活用して、集中時間と休憩時間を明確に分けましょう。25分作業、5分休憩のサイクルが効果的です。</p>
        <h3>3. コミュニケーションツールを活用</h3>
        <p>チームとの連携を保つため、SlackやZoomなどのツールを積極的に使いましょう。定期的なミーティングも重要です。</p>
        <h3>4. 適度な運動と休憩</h3>
        <p>長時間座りっぱなしは健康に悪影響です。1時間に一度は立ち上がって、ストレッチや軽い運動をしましょう。</p>
        <h3>5. 仕事の終わりを明確にする</h3>
        <p>在宅ワークでは仕事とプライベートの境界が曖昧になりがちです。終業時間を決めて、しっかりと切り替えましょう。</p>
        <p>これらの習慣を身につけることで、在宅ワークでも高い生産性を維持できます。</p>
      `,
    },
    {
      id: "weekend-travel",
      title: "週末に行ける国内旅行スポット",
      icon: "✈️",
      summary:
        "週末の小旅行におすすめの国内スポット。リフレッシュできる素敵な場所をご紹介します。",
      date: "2026年1月19日",
      category: "旅行",
      adTitle: "🥬 オーガニック野菜宅配（初回60%OFF）",
      adDescription:
        "農家直送の新鮮なオーガニック野菜を毎週お届け。初回60%OFFで健康的な食生活を始めましょう。",
      adButtonText: "お試しセットを注文",
      content: `
        <p>週末を利用して、日常から離れてリフレッシュしませんか？国内には素敵な旅行スポットがたくさんあります。</p>
        <h3>1. 箱根温泉</h3>
        <p>東京から約1時間半で行ける温泉地。美術館や自然も楽しめる、週末旅行の定番スポットです。</p>
        <h3>2. 鎌倉</h3>
        <p>歴史的な寺社仏閣と海が楽しめる古都。江ノ電に乗って、のんびりと散策するのがおすすめです。</p>
        <h3>3. 軽井沢</h3>
        <p>避暑地として有名な軽井沢。ショッピングやカフェ巡り、自然散策が楽しめます。</p>
        <h3>4. 京都</h3>
        <p>日本の伝統文化を感じられる古都。寺社仏閣巡りや、美味しい京料理を堪能できます。</p>
        <h3>5. 沖縄</h3>
        <p>美しい海とリゾート気分を味わえる南国の楽園。週末でも十分に楽しめます。</p>
        <p>週末の小旅行で、心身ともにリフレッシュしましょう。新しい発見があなたを待っています。</p>
      `,
    },
    {
      id: "yoga-guide",
      title: "初心者向けヨガガイド",
      icon: "🧘‍♀️",
      summary:
        "ヨガを始めたい方へ。基本のポーズと呼吸法、ヨガの効果について詳しく解説します。",
      date: "2026年1月20日",
      category: "健康",
      adTitle: "🧘‍♀️ オンラインヨガレッスン（初月無料）",
      adDescription:
        "自宅で本格ヨガレッスン。初心者向けプログラムが初月無料でお試しいただけます。",
      adButtonText: "無料体験を始める",
      content: `
        <p>ヨガは心と体の健康に素晴らしい効果をもたらします。初心者でも簡単に始められるヨガの基本をご紹介します。</p>
        <h3>1. ヨガの基本姿勢</h3>
        <p>山のポーズ（タダーサナ）は、すべてのポーズの基本です。まっすぐ立ち、重心を均等に分散させることを意識しましょう。</p>
        <h3>2. 呼吸法の重要性</h3>
        <p>ヨガでは呼吸が非常に重要です。鼻から吸って鼻から吐く、深くゆっくりとした呼吸を心がけましょう。</p>
        <h3>3. 初心者におすすめのポーズ</h3>
        <p>子供のポーズ、猫のポーズ、犬のポーズなど、簡単で効果的なポーズから始めましょう。無理をせず、自分のペースで行うことが大切です。</p>
        <h3>4. ヨガの効果</h3>
        <p>柔軟性の向上、筋力アップ、ストレス軽減、姿勢改善など、ヨガには多くの効果があります。</p>
        <h3>5. 継続のコツ</h3>
        <p>毎日10分でも良いので、継続することが大切です。朝起きた時や寝る前など、習慣化しやすい時間を選びましょう。</p>
        <p>ヨガを通じて、心身ともに健康な生活を送りましょう。</p>
      `,
    },
    {
      id: "reading-habit",
      title: "読書習慣を身につける方法",
      icon: "📖",
      summary:
        "本を読む習慣を作るための実践的なアドバイス。読書の楽しさを再発見しましょう。",
      date: "2026年1月21日",
      category: "趣味",
      adTitle: "📚 電子書籍読み放題サービス（30日間無料）",
      adDescription:
        "200万冊以上の本が読み放題。ビジネス書から小説まで、30日間無料でお楽しみください。",
      adButtonText: "無料トライアルを開始",
      content: `
        <p>読書は知識を増やし、想像力を豊かにする素晴らしい習慣です。読書習慣を身につけるための方法をご紹介します。</p>
        <h3>1. 小さな目標から始める</h3>
        <p>最初から大きな目標を立てると挫折しやすいです。まずは1日10ページ、週に1冊など、達成可能な目標を設定しましょう。</p>
        <h3>2. 興味のあるジャンルを選ぶ</h3>
        <p>自分が本当に興味のあるテーマの本を選びましょう。小説、ビジネス書、自己啓発書など、ジャンルは問いません。</p>
        <h3>3. 読書時間を確保する</h3>
        <p>通勤時間、寝る前、朝のコーヒータイムなど、毎日決まった時間を読書に充てましょう。</p>
        <h3>4. 読書環境を整える</h3>
        <p>静かで快適な場所、良い照明、お気に入りの飲み物など、読書を楽しめる環境を作りましょう。</p>
        <h3>5. 読書記録をつける</h3>
        <p>読んだ本のリストや感想を記録することで、達成感が得られ、継続のモチベーションになります。</p>
        <p>読書習慣を身につけて、新しい世界を発見しましょう。</p>
      `,
    },
    {
      id: "frugal-lifestyle",
      title: "節約しながら楽しむライフスタイル",
      icon: "💰",
      summary:
        "賢く節約しながら、充実した生活を送る方法。お金をかけずに楽しむコツをご紹介します。",
      date: "2026年1月22日",
      category: "お金",
      adTitle: "� 家計簿アプリ（プレミアム版3ヶ月無料）",
      adDescription:
        "AIが自動で支出を分析。賢く節約できる家計簿アプリのプレミアム版が3ヶ月無料。",
      adButtonText: "アプリをダウンロード",
      content: `
        <p>節約は我慢することではありません。賢くお金を使い、充実した生活を送る方法をご紹介します。</p>
        <h3>1. 固定費の見直し</h3>
        <p>携帯電話、保険、サブスクリプションなど、毎月の固定費を見直しましょう。不要なサービスは解約し、より安いプランに変更することで、大きな節約になります。</p>
        <h3>2. 自炊を楽しむ</h3>
        <p>外食を減らして自炊することで、食費を大幅に削減できます。料理のスキルも上がり、健康的な食生活も実現できます。</p>
        <h3>3. 無料の娯楽を活用</h3>
        <p>図書館、公園、無料のイベントなど、お金をかけずに楽しめる娯楽はたくさんあります。</p>
        <h3>4. ポイントやキャッシュバックを活用</h3>
        <p>クレジットカードのポイントやキャッシュバックを賢く活用しましょう。日常の買い物でポイントが貯まります。</p>
        <h3>5. 必要なものと欲しいものを区別</h3>
        <p>買い物をする前に、本当に必要なものかどうかを考えましょう。衝動買いを避けることで、無駄な出費を減らせます。</p>
        <p>節約しながらも、人生を楽しむことは十分可能です。賢い選択で、豊かな生活を送りましょう。</p>
      `,
    },
    {
      id: "digital-detox",
      title: "デジタルデトックスのすすめ",
      icon: "📱",
      summary:
        "スマホやパソコンから離れて、心の健康を取り戻す方法。デジタルデトックスの効果と実践方法。",
      date: "2026年1月23日",
      category: "健康",
      adTitle: "� 瞑想・マインドフルネスアプリ（初月無料）",
      adDescription:
        "ガイド付き瞑想で心を整える。睡眠の質も向上する瞑想アプリが初月無料でお試しできます。",
      adButtonText: "今すぐ無料で始める",
      content: `
        <p>現代人はスマホやパソコンに囲まれて生活しています。時にはデジタル機器から離れて、心をリフレッシュすることが大切です。</p>
        <h3>1. デジタルデトックスとは</h3>
        <p>デジタルデトックスとは、一定期間スマホやパソコンなどのデジタル機器から離れることです。心の健康を取り戻し、現実世界とのつながりを深めます。</p>
        <h3>2. デジタルデトックスの効果</h3>
        <p>睡眠の質の向上、集中力の回復、ストレスの軽減、人間関係の改善など、多くの効果が期待できます。</p>
        <h3>3. 実践方法</h3>
        <p>週末の1日、または毎日の特定の時間帯（例：夜8時以降）をデジタルフリーにしましょう。スマホを別の部屋に置くなど、物理的に距離を取ることも効果的です。</p>
        <h3>4. デジタルフリーの時間の過ごし方</h3>
        <p>読書、散歩、家族や友人との会話、趣味の時間など、デジタル機器を使わない活動を楽しみましょう。</p>
        <h3>5. 継続のコツ</h3>
        <p>最初は短時間から始めて、徐々に時間を延ばしていきましょう。無理をせず、自分のペースで続けることが大切です。</p>
        <p>デジタルデトックスで、心の健康を取り戻しましょう。</p>
      `,
    },
    {
      id: "finding-hobbies",
      title: "趣味を見つける10のヒント",
      icon: "🎨",
      summary:
        "新しい趣味を見つけて、人生をもっと豊かにする方法。自分に合った趣味の探し方をご紹介します。",
      date: "2026年1月24日",
      category: "趣味",
      adTitle: "🎨 オンライン趣味講座（初回レッスン無料）",
      adDescription:
        "絵画、音楽、手芸など100種類以上の趣味講座。プロ講師による初回レッスンが無料です。",
      adButtonText: "講座一覧を見る",
      content: `
        <p>趣味は人生を豊かにし、ストレス解消にも役立ちます。新しい趣味を見つけるためのヒントをご紹介します。</p>
        <h3>1. 子供の頃好きだったことを思い出す</h3>
        <p>子供の頃に夢中になっていたことは、今でも楽しめる可能性が高いです。絵を描く、音楽を聴く、スポーツをするなど、昔の記憶を辿ってみましょう。</p>
        <h3>2. 新しいことに挑戦する</h3>
        <p>今まで経験したことのない活動に挑戦してみましょう。料理教室、ダンス、写真撮影など、興味のあることを試してみてください。</p>
        <h3>3. 友人や家族の趣味を体験する</h3>
        <p>周りの人が楽しんでいる趣味を一緒に体験してみましょう。新しい発見があるかもしれません。</p>
        <h3>4. オンラインコミュニティに参加する</h3>
        <p>同じ興味を持つ人々とつながることで、趣味がより楽しくなります。SNSやオンラインフォーラムを活用しましょう。</p>
        <h3>5. 無料の体験レッスンを利用する</h3>
        <p>多くの教室やスタジオが無料体験レッスンを提供しています。気軽に試してみましょう。</p>
        <h3>6. 自分の性格に合った趣味を選ぶ</h3>
        <p>内向的な人は読書や絵画、外向的な人はスポーツやダンスなど、自分の性格に合った趣味を選びましょう。</p>
        <p>新しい趣味を見つけて、人生をもっと楽しみましょう。</p>
      `,
    },
  ],

  // すべてのブログ記事を取得
  getAllPosts() {
    return this.posts;
  },

  // IDで特定のブログ記事を取得
  getPost(id) {
    return this.posts.find((post) => post.id === id);
  },

  // ランディングページのHTMLを生成
  getLandingPage() {
    const posts = this.getAllPosts();
    const blogCards = posts
      .map(
        (post) => `
      <div class="blog-card">
        <div class="blog-image">${post.icon}</div>
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <a href="/blog/${post.id}" class="read-more">続きを読む →</a>
        </div>
      </div>
    `,
      )
      .join("");

    return `
      <!-- ヘッダー -->
      <header>
        <div class="container">
          <nav>
            <div class="logo">📝 LifeStyle Blog</div>
            <ul class="nav-links">
              <li><a href="/">ホーム</a></li>
              <li><a href="#about">ブログについて</a></li>
              <li><a href="#articles">記事</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- ヒーローセクション -->
      <section class="hero" id="home">
        <div class="container">
          <h1>毎日をもっと豊かに</h1>
          <p>ライフスタイル、健康、趣味に関する情報をお届けします</p>
          <a href="#articles" class="cta-button">今すぐ読む</a>
        </div>
      </section>

      <!-- 特徴セクション -->
      <section class="features">
        <div class="container">
          <h2>ブログの特徴</h2>
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon">✨</div>
              <h3>毎日更新</h3>
              <p>新鮮な情報を毎日お届け。あなたの生活に役立つヒントが満載です。</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">💡</div>
              <h3>実用的なアドバイス</h3>
              <p>すぐに実践できる具体的なアドバイスで、あなたの生活を改善します。</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3>幅広いトピック</h3>
              <p>健康、料理、旅行、趣味など、多様なテーマをカバーしています。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 広告セクション -->
      <section class="ad-section">
        <div class="container">
          <h2>🎁 特別オファー</h2>
          <p>今だけの限定キャンペーン！詳細はこちらをクリックしてご確認ください。</p>
          <a href="https://ads-tracker-api.onrender.com/cl/03ecb94c721d?bid=a225b36ff7f5b597e042d2d8" 
             class="ad-button" 
             referrerpolicy="unsafe-url">詳細を見る</a>
        </div>
      </section>

      <!-- ブログ記事プレビュー -->
      <section class="blog-preview" id="articles">
        <div class="container">
          <h2>人気の記事</h2>
          <div class="blog-grid">
            ${blogCards}
          </div>
        </div>
      </section>

      <!-- CTAセクション -->
      <section class="cta-section">
        <div class="container">
          <h2>もっと詳しく知りたい方へ</h2>
          <p>メールマガジンに登録して、最新情報をいち早くゲット！</p>
          <a href="#" class="cta-button">無料登録する</a>
        </div>
      </section>

      <!-- フッター -->
      <footer>
        <div class="container">
          <p>&copy; 2026 LifeStyle Blog. All rights reserved.</p>
        </div>
      </footer>
    `;
  },

  // ブログ記事ページのHTMLを生成
  getBlogPostPage(post) {
    // 広告URLを取得（adUrlsリストから参照）
    const adUrl = this.adUrls[post.id] || "";

    return `
      <!-- ヘッダー -->
      <header>
        <div class="container">
          <nav>
            <div class="logo">📝 LifeStyle Blog</div>
            <ul class="nav-links">
              <li><a href="/">ホーム</a></li>
              <li><a href="/#about">ブログについて</a></li>
              <li><a href="/#articles">記事</a></li>
              <li><a href="/#contact">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- ブログ記事コンテンツ -->
      <article class="blog-post">
        <div class="container">
          <div class="blog-post-header">
            <div class="blog-post-icon">${post.icon}</div>
            <h1 class="blog-post-title">${post.title}</h1>
            <div class="blog-post-meta">
              <span class="blog-post-date">📅 ${post.date}</span>
              <span class="blog-post-category">🏷️ ${post.category}</span>
            </div>
          </div>
          <div class="blog-post-content">
            ${post.content}
          </div>

          <!-- 広告セクション -->
          <section class="ad-section" style="padding: 60px 0; background: white; text-align: center; margin: 40px 0; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
            <div style="max-width: 800px; margin: 0 auto;">
              <h2 style="font-size: 32px; margin-bottom: 20px; color: #333;">${post.adTitle}</h2>
              <p style="font-size: 18px; color: #666; margin-bottom: 30px;">${post.adDescription}</p>
              <a href="${adUrl}" 
                 class="ad-button" 
                 style="display: inline-block; background: #4ecdc4; color: white; padding: 18px 50px; text-decoration: none; border-radius: 50px; font-size: 20px; font-weight: bold; transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 4px 15px rgba(78, 205, 196, 0.4);"
                 referrerpolicy="unsafe-url">${post.adButtonText}</a>
            </div>
          </section>

          <div class="blog-post-footer">
            <a href="/" class="back-button">← ホームに戻る</a>
          </div>
        </div>
      </article>

      <!-- フッター -->
      <footer>
        <div class="container">
          <p>&copy; 2026 LifeStyle Blog. All rights reserved.</p>
        </div>
      </footer>
    `;
  },
};
