# jestの挙動調査

どっかを調べたら載っているかもしれないけどとりあえず自分でやってみる  

## 調査項目

### DIなどでテストしたいモジュールが依存するクラスがspec.tsファイルないでインスタンス化されている場合
### jest.mock()関数で自動モックしたクラスを各テストで使う部分だけ実装する場合

## NOTE
jest.config.jsないとES6モジュールのインポート出来んわ  

```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```