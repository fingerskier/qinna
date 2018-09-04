class Blockchain {
	constructor() {
		// create chain and transaction
		this.chain = []
		this.transactions = []

		this.newBlock = this.newBlock.bind(this)
		this.newTransaction = this.newTransaction.bind(this)
		this.lastBlock = this.lastBlock.bind(this)
		this.proofOfWork = this.proofOfWork.bind(this)
	}

	newBlock() {}

	newTransaction() {}

	hash(block) {}

	lastBlock() {}
}

module.exports = Blockchain