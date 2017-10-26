import axios from 'axios'

export default {
      // http://www.yiguo.com/Handler/InitLayOut?r=0.4733571856908836&_=1508901898801
			InitLayOut(data) {
				return axios.get('/Handler/InitLayOut',{params:data})
			}
}
