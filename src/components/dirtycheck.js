export default class Dirty{
    constructor(obj){
        this.options = {
            el:obj.el,
            onDirty:obj.onDirty,
            onClean:obj.onClean,
        };

        this.eles = [
            'input',
            'textarea',
            'select',
        ];
        this.isDirty=false;
        this.history = ["clean", "clean"]; //Keep track of last statuses

        this.nodes = []
        this.init()
    }

    init(){
        let self = this
        for(let i=0;i<self.eles.length;i++){
            self.nodes.push(...self.options.el.querySelectorAll(self.eles[i]))
        }
        for(let i=0,node;node=self.nodes[i++];){
            self.saveInitialValues(node)
        }
        self.setEvents()

    }

    saveInitialValues(node){
        if(node.getAttribute('type') === 'checkbox'||node.getAttribute('type') === 'radio'){
            node.setAttribute('data-dirrty-initial-value',node.checked)
        }else {
            node.setAttribute('data-dirrty-initial-value',node.value)
        }
    }

    setEvents(){
        let self = this
        self.options.el.addEventListener('input',function(e){
            let _value;
            if(e.target.getAttribute('type') === 'checkbox'||e.target.getAttribute('type') === 'radio'){
                _value = e.target.checked+''
            }else {
                _value = e.target.value+''
            }
            e.target.setAttribute('data-is-dirrty',_value!==e.target.getAttribute('data-dirrty-initial-value'))
            self.checkValues()
        })
    }

    checkValues(){
        let nodes = this.nodes,self = this;
        let isDirty = false;
        for(let i=0,node;node = nodes[i++];){
            if(node.getAttribute('data-is-dirrty')==='true'){
                isDirty = true
            }
        }
        if(isDirty){
            self.setDirty();
        }else{
            self.setClean();
        }

        this.fireEvents()
    }
    fireEvents(){
        if(this.isDirty && this.wasJustClean()){
            this.options.onDirty()
        }

        if(!this.isDirty && this.wasJustDirty()){
            this.options.onClean()
        }
    }
    setDirty(){
        this.isDirty = true;
        this.history[0] = this.history[1];
        this.history[1] = "dirty";
    }

    setClean(){
        this.isDirty = false;
        this.history[0] = this.history[1];
        this.history[1] = "clean";
    }

    wasJustDirty(){
        return (this.history[0] === "dirty");
    }

    wasJustClean(){
        return (this.history[0] === "clean");
    }

}

/**
 *
 * 本库思想来自
 * jQuery版本 https://github.com/rubentd/dirrty
 *
 * **/