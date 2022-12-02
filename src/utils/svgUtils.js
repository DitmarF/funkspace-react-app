const transformRotateCenter = (degrees, x, y, width, height) => {

    const centerX = Number(x) + Number(width) / 2; 
    const centerY = Number(y) + Number(height) / 2; 

    return `rotate(${degrees} ${centerX} ${centerY})`;

}

export {transformRotateCenter}