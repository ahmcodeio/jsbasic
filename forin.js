function checkdata(){
    let me = {
        name: 'john',
        date: 26,
        major: 'litterature',
        semester: 9,
    }
    for(x in me){
        console.log(me[x])
    }
}
checkdata()