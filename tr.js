<script type="text/javascript">
function validation()
{
    let name= desktop.html.uname.value;
    let pwd=desktop.html.uname.value;
    if(uname==""||pwd=="")
    {
        alert("Both fields should not be blank");
        return;
    }
    if(pwd.lenght<6||pwd.lenght>12)
    {
        alert("Password must be 6 to 12 characters");
        return;
    }
    let str=uname.slice(0,1);
    if(uname.slice(0,1)=="_"||uname.slice(0,1)=="a"||str.match(/[0-9]/g)!=null)
    {
        alert("username should not start with _,@ and number");
        return;
    }   
    if(uname=="K19RC"||pwd=="helloworld")
    {
        (a href="homepage.html");
    }       
}
</script>