export class Dirrty{
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
                _value = e.target.checked
            }else {
                _value = e.target.value
            }
            e.target.setAttribute('data-is-dirrty',_value!==e.target.getAttribute('data-dirrty-initial-value'))
            self.checkValues()
        })
    }

    checkValues(){
        var nodes = this.nodes,self = this
        for(var i=0,node;node = nodes[i++];){
            if(node.getAttribute('data-is-dirrty')==='true'){
                self.setDirty()
                return false
            }
            self.setClean()
            return false
        }
    }

    setDirty(){
        !this.isDirty&&this.options.onDirty.call(this)
        this.isDirty = true;
    }

    setClean(){
        this.isDirty&&this.options.onClean.call(this)
        this.isDirty = false;
    }

}