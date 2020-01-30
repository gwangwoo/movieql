# movieql

Movie API with Graphql

## chap 2

under- fetching
over - fetching

디비에 내가 사용하지 않을 영역을 요청하는 방식은 효율적이지 않음
즉 불필요한 데이터까지 같이 날라온다.
==> over-fetching

-- graphql은 이러한 over-fetching 없이 사용할 수 있다. --

REST에서 하나를 완성하려고 여러번 쿼리를 날림
이러한 경우 under-fetching이라고 하고 graphql을 사용하면 이러한 경우도 없다.

-- graphql에서는 이모든것들을 하나의 query로 만들 수 있음. --

```graphql
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
```

```javascript
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
```

---

## chap 3

Resolver에 대해 알아보자
schema에 대해서 알아보자
스키마는 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명.

---

## chap 4

schema는 네가 받거나 줄 정보에 대한 서술이라고 생각하면 댐

---

## chap 5

**Graphql**
typedefs와 resolver로 나뉜다.

**typeDefs**

> typedefs에는 내가 사용할 타입을 정의하거나, query, mutation을 작성

> query -> 데이터를 조회할 때 사용
> mutation -> 데이터를 입력 수정 삭제 할때 사용

약속에 불과하지만 지켜주는게 좋음.

**resolver**

> 실질적인 기능을 작성하는 곳.
> 앞서 타입과 질의들을 정해주었으니 어떤 작업들을 할건지를 작성하는 곳.

<<<<<<< HEAD
---
=======

## chap 6
좀 더 복잡한 쿼리에 대해서 알아보자.
이것이 바로 graphql 그자체이니깐.!

graphql에는 3종류가 있다.
**query**
**mutation**
**subscription**

쿼리를 어떻게 보내는지에 대해 배울 수 있었다.

graphql 파일에는 내가 어떻게 쿼리를 보내야 할지에 대한 형식을 잡아주는 곳.

resolver(js파일)은 어떤작업을 할지에 대해 정의하는 곳.




- - -

## chap 7

**filter를 사용해서 값을 가져오기**

filter 사용법을 배운다.

쿼리의 리턴을 ! 로 해주지않으면 리턴을 하지않아 에러찾기가 힘들다.
요청은 항상 return 해야한다는 것을 명심하자.


>>>>>>> 757a3c875e3afb48bdddc3b503d0049b1eb6c19d
