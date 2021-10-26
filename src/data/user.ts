export default {
    name: 'Test',
    mobileNumber: 999999999,
    email: 'test@gmail.com',
    preference:{
        balanceVisible: false,
        billRemainder: false,
        monthStartDate: 1,
    },
    cash: {
        totalSpend: 2323,
        totalIncome: 23423,
        monthlyBudget: 50000,
        inHand: 3234,
    },
    accounts:[
        {
            name: 'State Bank of India',
            alias: 'SBI',
            type: 'Bank Account',
            category: 'Personal',
            accountNumber: 9809867598,
            cardNumber: 2342456342,
            balance: 350,
            outstanding: 0,
            isActive: true,
            billStartDate: '',
            billDueDate: '',
            billAmount: 0,
        },{
            name: 'HDFC Bank',
            alias: 'HDFC',
            type: 'Personal',
            category: 'Bank Account',
            accountNumber: 9806756934898,
            cardNumber: 23354542342,
            balance: 1000,
            outstanding: 0,
            isActive: true,
            billStartDate: '',
            billDueDate: '',
            billAmount: 0,
        },{
            name: 'State Bank of India',
            alias: 'SBI CC',
            type: 'Personal',
            category: 'Credit Card',
            accountNumber: 9809567523898,
            cardNumber: 23423346756542,
            balance: 50000,
            outstanding: 0,
            isActive: true,
            billStartDate: '',
            billDueDate: '',
            billAmount: 0,
        }
    ],
    bills: [
        {
            name: 'State Bank of India',
            alias: 'SBI',
            type: 'Bank Account',
            category: 'Personal',
            accountNumber: 9809867598,
            cardNumber: 2342456342,
            balance: 350,
            outstanding: 0,
            isActive: true,
            billStartDate: '',
            billDueDate: '',
            billAmount: 0,
        },{
            name: 'HDFC Bank',
            alias: 'HDFC',
            type: 'Personal',
            category: 'Bank Account',
            accountNumber: 9806756934898,
            cardNumber: 23354542342,
            balance: 1000,
            outstanding: 0,
            isActive: true,
            billStartDate: '',
            billDueDate: '',
            billAmount: 0,
        }
    ]
}