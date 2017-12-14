export class Bank {
  constructor (public block: number) {
    this.block = block
  }
}

export class BankSlot {
  constructor (public banks: Bank[]) {
    this.banks = banks
  }

  getHighestBank (): Bank {
    let i
    let hb = this.banks[this.banks.length - 1]
    for (i = this.banks.length - 2; i >= 0; i--) {
      hb = this.banks[i].block >= hb.block ? this.banks[i] : hb
    }
    return hb
  }

  distributeBank (b: Bank) {
    let v = b.block
    b.block = 0
    let i = this.banks.indexOf(b) + 1
    while (v > 0) {
      this.banks[i % this.banks.length].block++
      i++
      v--
    }
    return this.getDistribution()
  }

  getDistribution (): string {
    return this.banks.map((b) => b.block).join(':')
  }
}
