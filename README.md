# Vanilla Counter

Lightweight JS library to create counters.

### Installation

Add `vanilla-counter` to `head` tag:

```html
<head>
    <script src="https://unpkg.com/vanilla-counter"></script>
</head>
```

### Usage

First create a element with `data-vanilla-counter` attribute. This attribute will help `vanilla-counter` to recognize elements.

```html
<span data-vanilla-counter></span>
```

You can also add following attributes:

| Attribute | Default | Optional | Details |
| --------: | ------: | ----------: | -------: |
| data-start-at | -- | `false` | Where to start count |
| data-end-at | -- | `false` | Where to end count |
| data-delay | 0 | `true` | Delay on animation start |
| data-time | 1000 | `true` | Time length of animation |
| data-format | {} | `true` | Counter will replace `{}` with number. Ex: `{}%` will be rendered as `100%`. **Note: You can not add any character or space inside curly braces, otherwise it will not work.**

Example,

```html
<span 
    data-vanilla-counter 
    data-start-at="0" 
    data-end-at="100" 
    data-time="10000" 
    data-delay="0" 
    data-format="{}%"
> </span>
```

You can also use inner html for format. Example:

```html
<span 
    data-vanilla-counter 
    data-start-at="0" 
    data-end-at="100" 
    data-time="10000" 
    data-delay="0"
>{}%</span>
```

But remember that `data-format` way is first case. So, if you use both methods, counter will get `data-format` value.

#### Initialize

After adding elements, don't forget to initialize.

```html
<body>
    <!-- ... -->
    <script>
        VanillaCounter();
    </script>
</body>
```
