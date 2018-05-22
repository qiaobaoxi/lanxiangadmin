<template>
	<section>
		<div class="addUser"><el-button type="primary" @click="addUser()">添加用户</el-button></div>
		<template>
			<el-table
			:data="tableData"
			border
			style="width: 100%">
			<el-table-column
				prop="id"
				label="id"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="账号"
				width="180">
			</el-table-column>
			<el-table-column
				prop="grade"
				label="等级">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址">
			</el-table-column>
			<el-table-column
				prop="createTime"
				label="最后一次操作时间">
			</el-table-column>
			<el-table-column label="操作">
			<template scope="scope">
				<el-button
				size="small"
				@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			</template>
			</el-table-column>
			</el-table>
		</template>
		<el-dialog
			:title="title"
			:visible.sync="dialogVisible"
			width="30%"
			>
			<user-manager :userId="userId"  @closeSetGrade="closeSetGrade"></user-manager>
		</el-dialog>
	</section>
</template>
<script>
import { getUserList } from '../../api/api';
import UserManager from '../../components/UserManager';
	export default {
		data() {
			return {
				tableData: [],
				title: '添加用户',
				dialogVisible: false,
				userId:0
			}
		},
		methods: {
            init(){
			    getUserList().then((response)=>{
				    let res = response.data 
				    if (res.code) {
					  let list = res.result;
					  this.tableData = list
				    }else{
					  this.$message('数据出错')	
					}
			   })
			},
			handleEdit(index,item){
				this.title = '修改用户';
				this.userId = item.id;
				this.dialogVisible=true;
			},
			addUser(index){
				this.title = '添加用户';
				this.dialogVisible=true;
			},
			closeSetGrade(){
				this.userId = 0;
				this.dialogVisible=false;
				this.init();
			}
		},
		mounted() {
			this.init()
		},
		components:{
			UserManager
		}
	}

</script>

<style scoped lang='less'>
    .addUser{
	    margin: 10px 0;
	}
</style>