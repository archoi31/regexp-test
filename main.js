
//백틱기호쓰면 엔터쳐도 됨
const str = `
010-1234-5678
thedfdf@gamil.com
https://www.omdbapi.com/?apikey=7035c60&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

//const regexp = new RegExp('the','gi')
const regexp = /the/gi

console.log(str.match(regexp))
console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA')) //원본데이터에 영향 없음


console.log(str.match(/\.$/gim))  //각줄에 끝나는 부분에 .이 있는가 (m은 줄바꿈 된 부분을 시작과 끝으로 본다)
console.log(str.match(/\.$/gi)) //전체 문자열의 끝나느 부분에 .이 있는가

console.log(str.match(/^t/gim)) //각 줄에t로 시작하는 것 
console.log(str.match(/./g))//임의의 한 문자와 일치
console.log(str.match(/h..p/g)) //h 임의 임의 p 일치
console.log(str.match(/fox|dog/g))//fox 또는 dog 일치
console.log(str.match(/https?/g)) //?앞에 있는 s가 있을수도 있고 없을 수도 있고

console.log(str.match(/d{2}/g)) //2가 2개 연속
console.log(str.match(/\b\w{2,3}\b/g)) // \w 는 임의의 알파벳과 숫자가 아닌

console.log(str.match(/[0-9]{1,}/g)) // 숫자 1개 이상 연속
console.log(str.match(/[가-힣]{1,}/g)) // 한글 모두 찾음

console.log(str.match(/\w/g)) // 숫자, 알파벳, 언더바
console.log(str.match(/\bf\w{1,}/g)) // 63개 일치x 경계, f, 63개 문자가 1개 이상, 63개 일치x 경계 - f로 시작하는 모든 영단어
console.log(str.match(/\d{1,}/g))
console.log(str.match(/\s/g))



const h = ` the htllo wold  !`
console.log(h.replace(/\s/g, ' ')) //모든 공백문자들을 공백한개로 변경

console.log(str.match(/.{1,}(?=@)/g)) //골뱅이 앞쪽일치
console.log(str.match(/(?<=@).{1,}/g)) //골뱅이 앞쪽일치