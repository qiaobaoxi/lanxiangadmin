<template>
	<section>
		<div class="addjsc"><el-button type="primary" @click="addjsc">添加权限</el-button></div>
		<template>
			<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column
				prop="id"
				label="id"
				width="180">
			</el-table-column>
			<el-table-column
				prop="grade"
				label="等级"
				width="180">
			</el-table-column>
			<el-table-column
				prop="describe"
				label="描述">
			</el-table-column>
			</el-table>
		</template>
		<el-dialog
			title="添加权限"
			:visible.sync="dialogVisible"
			width="30%"
			:before-close="beforeClose"
			>
			<jurisdiction ref="child" @closeAdd="closeAdd"></jurisdiction>
		</el-dialog>
	</section>
</template>
<script>
import { jurisdictionList } from '../../api/api';
import Jurisdiction from '../../components/Jurisdiction';
	export default {
		data() {
			return {
				tableData: [],
				dialogVisible: false
			}
		},
		methods: {
            init(){
			   jurisdictionList().then((response)=>{
					let res = response.data 
				    if (res.code) {
					  let list = res.result;
					  this.tableData = list
				    }else{
					  this.$message('数据出错')	
					}
			   })
			},
			addjsc(){
				this.dialogVisible = true;
			},
			closeAdd(num=0){
				if(num){
                    this.init()
				}
               this.dialogVisible=false
			},
			beforeClose(done){
			    this.$refs.child.init('form',done);
			}
		},
		mounted() {
			this.init()
		},
		components:{
			Jurisdiction
		}
	}

</script>

<style scoped lang='less'>
    .addjsc{
	    margin: 10px 0;
	}
</style>