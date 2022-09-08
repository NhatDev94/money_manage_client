import axios from "axios"

const SpendingService = {
    link: 'http://localhost:3000',
    getSpendings: async () => {
        const {data} = await axios.get(SpendingService.link + '/spending')
        return data
    }
}

export default SpendingService