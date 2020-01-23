# movieql

Movie API with Graphql

## 2강

under- fetching
over - fetching

디비에 내가 사용하지 않을 영역을 요청하는 방식은 효율적이지 않음
즉 불필요한 데이터까지 같이 날라온다.
==> over-fetching

-- graphql은 이러한 over-fetching 없이 사용할 수 있다. --

REST에서 하나를 완성하려고 여러번 쿼리를 날림
이러한 경우 under-fetching이라고 하고 graphql을 사용하면 이러한 경우도 없다.

-- graphql에서는 이모든것들을 하나의 query로 만들 수 있음. --

query {
feed {
comments
likeNumber
}
notifications {
isRead
}
user {
username
profilePic
}
}

{
feed: [
{
comments:1,
likeNumber: 20
}
],
notifications: [
{
isRead: true
},
{
isRead: false
}
],
user: [
username: "nico"
profilePic: "http:"
]
}
