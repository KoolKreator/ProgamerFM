import Knobs from '@yaireo/knobs';

const myKnobs = new Knobs({
  ...,
  knobs: [
    {
      cssVar: ['bg'], // alias for the CSS variable
      label: 'Color',
      type: 'color',
      value: '#45FDA9',
      onChange(e, knobData, hsla) => {
        console.log( myKnobs.format(knobData.value, 'rgb') )  // will print a color string in RGBA
      }
    }
  ]
})

myKnobs.color.format()
