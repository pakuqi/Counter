# Counter

## このプロジェクトに関して
Reduxの簡単なサンプルです。  
ViewにReactを使っています。Counter VanillaをReactを使って画面表示するようにしたバージョンです。

## 実装
以下のプロジェクトを参考にしました。
https://github.com/reactjs/redux/tree/master/examples/counter

以下のReduxオブジェクトを実装しました。
- Reducer
- Store


1. incrementあるいはdecrementボタンをクリックするとdispatchをコールしてStoreにActionを送ります。
2. Actionに従いReducerはStateを返します。
3. Stateが変化するとupdate()が実行されます。
4. subscribe()によってStateが変化したらupdate()が呼び出されるようにします。update()でthis.state.valueを更新します。
5. Counterにthis.state.valueを渡します。this.state.valueが変化するとCounerが再描画されます。

## 前提条件
- npmがインストールされていること。

## 環境構築
以下のコマンドを実行します。  
$ npm install

## アプリケーションの起動の仕方
以下のコマンドを実行します。  
$ npm start

localhost:3000がブラウザーで開かれます。

## フォルダ構成
git cloneすると、以下のようになっているはずです。

```
Counter/
  README.md
  README_ja.md
  .gitignore
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    Application.js
    Counter.js
    index.js
```

プロジェクトをビルドするには、**これらのファイルが必要です。**


* `public/index.html` はページのテンプレートです。
* `src/index.js` はJavaScriptのエントリーポイントです。
* `src/Applicaton.js` はReduxの実装をしています。
* `src/Counter.js` はCounterの実装です。
