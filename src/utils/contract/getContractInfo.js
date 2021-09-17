import { baseContract } from './baseContract'
import { Base64 } from 'js-base64'

const getContractInfo = async function() {
  const nextMonster = await baseContract.methods.next_monster().call()

  // eslint-disable-next-line prefer-const
  let monsterList = []
  for (let index = 1; index <= nextMonster; index++) {
    // eslint-disable-next-line prefer-const
    let monsterInfo = {
      id: '',
      prefix: '',
      monster: '',
      suffix: '',
      image: ''
    }

    baseContract.methods
      .prefix(index)
      .call()
      .then(res => {
        monsterInfo.id = index
        monsterInfo.prefix = res
      })

    baseContract.methods
      .monster(index)
      .call()
      .then(res => {
        monsterInfo.monster = res
      })

    baseContract.methods
      .suffix(index)
      .call()
      .then(res => {
        monsterInfo.suffix = res
      })

    baseContract.methods
      .tokenURI(index)
      .call()
      .then(res => {
        const decodeUrl = res.split('data:application/json;base64,')[1]
        const svgUrl = Base64.decode(decodeUrl)
        monsterInfo.image = JSON.parse(svgUrl).image
      })

    monsterList.push(monsterInfo)
  }

  return monsterList
}

export { getContractInfo }
