<template>
  <div class="index">
    <el-container>
      <el-header class="index_header">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">黑马</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple-light">电商后台管理系统</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">退出</div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container> 
  </div>
</template>
<style>
    .index{
        width: 100%;
    }
    .index_header{
        background-color: #b3c0d1;
        height: 60px;
    }
    .index_header>div>div{
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 60px
    }
</style>
