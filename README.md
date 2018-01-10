# Dyslectionator

Library to let user experience dyslectiesheid

## Getting Started

Getting started is easy, just follow the instructions.

### Installing

A step by step series of examples that tell you have to get a development env running

Download dyslectionator.js and include it in your ```head```.

```html
<head>
  <script src="dyslectionator.js"></script>
</head>
```

Initialize below your html code like

```html
<script>
  dyslectionator.init({

  });
</script>
```

## Extra configuration options

**selector** Option to change the word which must be shuffled. Must be an id.

```html
<script>
  dyslectionator.init({
    selector: "#shuffler"
  });
</script>
