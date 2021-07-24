function changeTenCoin(money) {
  return money - 10
}

function changeFiveCoin(money) {
  return money - 5
}

function changeTwoCoin(money) {
  return money - 2
}

function changeOneCoin(money) {
  return money - 1
}

function changeCondition(money) {
  if (money >= 10) {
    return changeTenCoin(money)
  } else if (money >=5) {
    return changeFiveCoin(money)
  } else if (money >= 2) {
    return changeTwoCoin(money)
  }

  return changeOneCoin(money)
}

function ChangeMoney(money) {
  let leftMoney = money
  let coin = 0
  while (leftMoney > 0) {
    leftMoney = changeCondition(leftMoney)
    coin++
  }

  return coin
}

console.log(ChangeMoney(28))
