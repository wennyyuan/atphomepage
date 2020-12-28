(function(){
  let moveData = [
    {
      type: '1',
      style:`transform: scale(0.3);opacity: 0.5;`,
      animation: [
        {
          duration: '4s',
          timing: 'cubic-bezier(.5,.01,.49,1)',
          keyframe: {
            '0%': {
              top: '10%'
            },
            '100%': {
              top: '12%'
            }
          }
        },
        {
          duration: '6s',
          timing: 'cubic-bezier(.5,.01,.49,1)',
          keyframe: {
            '0%': {
              left: '60%'
            },
            '100%': {
              left: '62%'
            }
          }
        }
      ]
    },{
      type: '2',
      style:`transform: scale(0.3) rotate(-90deg);opacity: 0.4;filter:blur(3px);`,
      animation: [{
        duration: '7s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '20%'
          },
          '100%': {
            top: '22%'
          }
        }
      },
      {
        duration: '5s',
        timing: 'cubic-bezier(0.36,0,.66,1)',
        keyframe: {
          '0%': {
            left: '10%'
          },
          '100%': {
            left: '8%'
          }
        }
      }]
    },{
      type: '3',
      style:`transform: scale(0.3) rotate(-90deg);`,
      animation: [{
        duration: '6s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '10%'
          },
          '100%': {
            top: '13%'
          }
        }
      },
      {
        duration: '5s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            left: '60%'
          },
          '100%': {
            left: '63%'
          }
        }
      }]
    },{
      type: '4',
      style:`transform: scale(0.3) rotate(-90deg);`,
      animation: [{
        duration: '6s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '50%'
          },
          '100%': {
            top: '54%'
          }
        }
      },
      {
        duration: '5s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            left: '70%'
          },
          '100%': {
            left: '74%'
          }
        }
      }]
    },{
      type: '1',
      style:`transform: scale(0.3); opacity:0.5;`,
      animation: [{
        duration: '6s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '90%'
          },
          '100%': {
            top: '87%'
          }
        }
      },
      {
        duration: '5s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            left: '6%'
          },
          '100%': {
            left: '10%'
          }
        }
      }]
    },{
      type: '1',
      style:`transform: scale(0.3);left: 35%;`,
      animation: [{
        duration: '10s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '50%'
          },
          '100%': {
            top: '45%'
          }
        }
      },{
        duration: '5s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            left: '35%'
          },
          '100%': {
            left: '37%'
          }
        }
      }]
    },{
      type: '7',
      style:`transform: scale(0.2) rotate(-90deg);`,
      animation: [{
        duration: '4s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '55%'
          },
          '100%': {
            top: '54%'
          }
        }
      },
      {
        duration: '8s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            left: '15%'
          },
          '100%': {
            left: '18%'
          }
        }
      }]
    },{
      type: '1',
      style:`transform: scale(0.5) rotate(40deg); filter:blur(1px);opacity:0.3`,
      animation: [{
        duration: '4s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '30%'
          },
          '100%': {
            top: '33%'
          }
        }
      },
      {
        duration: '5s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            left: '75%'
          },
          '100%': {
            left: '80%'
          }
        }
      }]
    },{
      type: '6',
      style:`transform: scale(0.4) rotate(40deg);left:50%;top:5%;filter:blur(2px);`,
      animation: [{
        duration: '3s',
        timing: 'ease',
        keyframe: {
          '0%': {
            opacity: '0.7'
          },
          '100%': {
            opacity: '0'
          }
        }
      }]
    },
    {
      type: '1',
      style:`transform: scale(0.8) rotate(40deg);left:80%;bottom:5%;filter:blur(2px)`,
      animation: [{
        duration: '4s',
        timing: 'ease',
        keyframe: {
          '0%': {
            opacity: '0.7'
          },
          '100%': {
            opacity: '0'
          }
        }
      },{
        duration: '5s',
        timing: 'ease',
        keyframe: {
          '0%': {
            bottom: '5%'
          },
          '100%': {
            bottom: '7%'
          }
        }
      },{
        duration: '4s',
        timing: 'ease',
        keyframe: {
          '0%': {
            left: '80%'
          },
          '100%': {
            left: '82%'
          }
        }
      }]
    },
    {
      type: '6',
      style:`transform: scale(0.8) rotate(40deg);left:20%;top:55%;filter:blur(2px)`,
      animation: [{
        duration: '3.3s',
        timing: 'ease',
        keyframe: {
          '0%': {
            opacity: '0.7'
          },
          '100%': {
            opacity: '0.1'
          }
        }
      }]
    },{
      type: '1',
      style:`transform: scale(0.3) rotate(40deg);opacity:1;filter:blur(1px)`,
      animation: [{
        duration: '8s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            top: '15%'
          },
          '100%': {
            top: '20%'
          }
        }
      },{
        duration: '6s',
        timing: 'ease',
        keyframe: {
          '0%': {
            left: '85%'
          },
          '100%': {
            left: '90%'
          }
        }
      }]
    },{
      type: '1',
      style:`opacity:0.6;filter:blur(1px)`,
      animation: [{
        duration: '8s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            bottom: '10%'
          },
          '100%': {
            bottom: '8%'
          }
        }
      },{
        duration: '6s',
        timing: 'ease',
        keyframe: {
          '0%': {
            left: '40%'
          },
          '100%': {
            left: '37%'
          }
        }
      },{
        duration: '5s',
        timing: 'ease',
        keyframe: {
          '0%': {
            transform: 'scale(0.2)'
          },
          '100%': {
            transform: 'scale(0.5)'
          }
        }
      }]
    },{
      type: '1',
      style:`transform: scale(0.3) rotate(40deg);filter:blur(1px);top: 35%;left:45%`,
      animation: [{
        duration: '6s',
        timing: 'cubic-bezier(0.36,0,.72,1)',
        keyframe: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '0.7'
          }
        }
      }]
    },{
      type: '1',
      style:`transform: scale(0.3);left: 35%;opacity:0.6;`,
      animation: [{
        duration: '7s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            top: '5%'
          },
          '100%': {
            top: '9%'
          }
        }
      },{
        duration: '10s',
        timing: 'cubic-bezier(0.36,0,.54,1)',
        keyframe: {
          '0%': {
            left: '20%'
          },
          '100%': {
            left: '27%'
          }
        }
      }]
    }
  ];
  createDom(moveData);
  function getKeyFrame(styleArr, num , styleStr) {
    let res = {};
    styleStr = styleStr || '';
    let animationArr = [];
    styleArr = styleArr || [];
    styleArr.forEach((item, index) => {
      let keyFrameName = `move${num}-${index}`;
      let keyFramesStr = `
        @keyframes ${keyFrameName}{
          ${(()=>{
            let i = '';
            for (let key in item.keyframe) {
              i += `
                ${key}${JSON.stringify(item.keyframe[key]).replace(/"/g,'')}
              `;
            }
            return i;
          })()}
        }
      `;
      styleStr += keyFramesStr;
      animationArr.push(`${keyFrameName} ${item.duration} ${item.timing} infinite alternate`);
    });
    animationStr = animationArr.join(',');
    return {
      animationStr: animationStr,
      styleStr: styleStr
    };
  };
  function createDom(domList) {
    let list = [];
    let styleTotal = '';
    domList.forEach((item, index)=>{
      let node = document.createElement('div');
      let { animationStr, styleStr } = getKeyFrame(item.animation, index, styleTotal);
      styleTotal += styleStr;
      node.setAttribute('style',`animation: ${animationStr}; ${item.style?item.style:''}`);
      list.push(node);
      node.setAttribute('class', `item${item.type}`);
    });
    let styelNode = document.createElement('style');
    styelNode.innerHTML = styleTotal;
    document.querySelector('head').appendChild(styelNode);
    let mask = document.querySelector('#front-mask');
    list.forEach(item=>{
      mask.appendChild(item);
    });
  }
})();