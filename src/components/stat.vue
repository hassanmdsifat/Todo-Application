<template>

<pie-chart :data="chartData"/>
    
</template>

<script>

export default {
    name: 'expense-stat',
    props: ['todos'],
    data(){
        return {
            chartData: undefined,
            msg: 'Sifat'
        }    
    },
    methods: {
        getChartData: function(){
            let chartArr = [];
            for( let i of this.todos){
                chartArr.push([ i['details'], i['amount'] ]);
            }
            return chartArr;
        },
        setChartData: function(){
            this.chartData = this.getChartData();
        }    
    },
    mounted(){
        this.setChartData();
    }
}
</script>