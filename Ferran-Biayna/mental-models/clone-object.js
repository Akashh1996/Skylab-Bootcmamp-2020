function clone(object) {
    let cloneData = Object.assign({}, object);
    return cloneData;
  }

  let data = { name: "Ferran", surname: "Biayna" };
  let cloneData = clone(data)

  cloneData.name="Fernando"

  console.log(data.name)
  console.log(cloneData.name)