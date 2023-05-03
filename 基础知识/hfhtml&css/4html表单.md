### html表单

1. 本质上表单的每一个元素都是以键值对的方式提交给服务器
2. get方法会把键值对链接在url的后面，并且对长度有一定的限制（没有post可以提交的内容多）；post方法会把表单里的数据打包提交给服务器，在客户端是看不到这个包的
3. 使用get方法和post方法的场合

- 通过搜索找到的页面创建书签，获得这个页面使用get方法
- 包含textarea的表单，post
- 包含用户隐私的表单，post
- 需要重复提交的订单，post（因为每次传入的值不一样）

### 控件中的`name`和`value`

表单中的内容实际上都是按照键值对的形式提交的，name表示的是键名，value表示的是对应的值，所以一般来说控件都需要设置这两个属性，不同控件的具体设置方法见下面的案例

对于一个键多个值的情况，name是一样的，但是value是不一样的，这样也是可以提交的，常见于checkbox

### 使用label标签标注表单控件信息

label标签，将标签文字放在label中，增加文字和表单元素的关联程度，其中for属性就是关联元素的id

```html
<lable for="username">name:</lable>
<input type="text" name="name" id="username">
```

### 表单常用控件

```html
<form action="#" method="get">
    <h3>html form</h3>

    <h5>text_individual</h5>
    
    <label for="name">name:</label>
    <input id="name"  type="text" placeholder="texting..." name="username" value="">
   
    <h5>checkbox_hobbies</h5>
    
        <label for="sleeping">sleeping</label>
        <input id="sleeping"  type="checkbox" name="hobby"  value="sleeping" >
        <label for="eating">eating</label>
        <input id="eating"  type="checkbox" name="bobby" value="eating" >
       
    <h5>radio_gender</h5>
        <label for="female">female</label>
        <input  id="female"  type="radio" name="gender" value="0" >
        <label for="male">male</label>
        <input  id="male"  type="radio" name="gender" value="1" >
    
    <h5>select_grades options</h5>
        
        <select title="grades" name="grade">
            <option value="1">grades1</option>
            <option value="2">grades2</option>
            <option value="3">grades3</option>
            <option value="4">grades4</option>
        </select>
    <h5>textarea_longtext</h5>
        <label for="info">info:</label>
        <textarea id="info" cols="30" rows="10" name="selfintro" value=""></textarea>
        <button type="submit">submit</button>
    </form>

```

表单中常见的控件以及使用的细节

- text输入
- textarea输入
- 复选框checkbox
- 单选按钮radio：一组radio需要设置相同的name属性值，达到单选的效果
- 选择列表select

