# DMS
度分秒を10進度に変換するユーティリティです。

## デモ
https://code4fukui.github.io/DMS/

## 機能
- 度分秒を10進度に変換
- 座標の文字列表現の解析をサポート

## 必要環境
特になし。モダンなJavaScriptの実行環境で利用できます。

## 使い方
```js
import { dms2d, sdms2d } from "https://code4fukui.github.io/DMS/DMS.js";

console.log(dms2d(35, 10, 5));
console.log(sdms2d("35 10 5N"));
```

## ライセンス
MIT