const Mock = {
    keydown: (a) => {
        if(a.key === 'Enter') {
            var value = a.target.value.toLowerCase();
            var cmds = ['whoami', 'contact', 'status', 'oss', 'version', 'intro', 'chat', 'login'];
            if(cmds.includes(value)) {
                window.alert("Valid Command");
            } else {
                Mock.push(`bash: ${value}: command not found`)
            }
        }
    },
    push: (value) => {
        if(Mock.currentInput >= 1) Mock.clear();
        var console = document.getElementById("consoleput");
        var text = document.createElement("span")
        text.innerHTML = "<br/>"+value+"<br/>" + Mock.input;
        document.activeElement.blur();
        // var newInput = document.getElementById("in1");
        // newInput.focus();
        console.appendChild(text);
        Mock.currentInput++;
    },
    currentInput: 0,
    input: "<span className='coninput'>user [ ~ ] <small>►</small> <input id='in1' onkeydown='Mock.keydown(this)' autoFocus='true' placeholder='type here...'></input></span>",
    clear: () => {
        var console = document.getElementById("consoleput");
        console.innerHTML = "<span className='coninput'>user [ ~ ] <small>►</small> <input id='in0' onkeydown='Mock.keydown(this)' autoFocus='true' placeholder='type here...'></input></span>"
    }
}

window.Mock = window.Mock || Mock;
export default Mock;