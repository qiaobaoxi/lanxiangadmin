<template>
	<section>
        <div class="row"><span class="title">姓名：</span><em>{{user.wxName}}</em></div>
        <div class="row"><span class="title">性别：</span><em>{{user.sex}}</em></div>
        <div class="row"><span class="title">等级：</span>
            <el-select v-model="jurisdictionId" placeholder="请选择">
                <el-option
                v-for="item in grades"
                :key="item.id"
                :label="item.grade"
                :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div class="btns">
            <el-button>取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </div>
	</section>
</template>
<script>
import { jurisdictionList,setUserJsc,getUserById } from '../../api/api';
	export default {
        props:['userId'],
		data() {
			return {
                grades: [],
                jurisdictionId: '',
                user:{

                }
			}
		},
		methods: {
            init(){
                this.grade=''
                jurisdictionList().then((response)=>{
                    let res=response.data
                    if(res.code){
                        this.grades=res.result
                    }
                })
                getUserById({userId:this.userId}).then((response)=>{
                    let res=response.data;
                    if(res.code){
                     this.user=res.result
                    }
                })
            },
            submit(){
                let parems = {
                    userId:this.userId,
                    jurisdictionId:this.jurisdictionId
                }
                setUserJsc(parems).then((res)=>{
                    this.$emit('closeSetGrade');
                })
            }
		},
		mounted() {
            this.init();
        },
        watch:{
            userId(newDate,oldDate){
                this.init();
            }
        }
	}
</script>

<style scoped lang='less'>
    .row{
        height: 40px;
        line-height: 40px;
        .title{
            display: inline-block;
            width: 200px;
            text-align: right;
        }
    }
    .btns{
        margin-top: 10px;
        text-align: center;
    }
</style>