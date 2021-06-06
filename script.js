const wrappedXHROpen = window.XMLHttpRequest.prototype.open

XMLHttpRequest.prototype.wrappedSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader
XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
  this.wrappedSetRequestHeader(name, value), this.headers || (this.headers = {}), this.headers[e] || (this.headers[e] = []), this.headers[e].push(t)
}

window.XMLHttpRequest.prototype.open = function () {
  this.addEventListener('load', function () {
    if (this.headers && this.headers.Authorization) {
      const [token] = this.headers.Authorization
      const notifications = [...document.querySelectorAll('.scrollerBase-289Jih > div > div > div.listItemWrapper-KhRmzM > div > svg > foreignObject > div')]

      notifications.shift()
      notifications.pop()

      const observer = new MutationObserver(() => {
        notifications.forEach((element) => {
          const dataListItemId = element.attributes.getNamedItem('data-list-item-id')
          const id = dataListItemId.nodeValue.replace('guildsnav___', '')

          // TODO: Ignore id
        })
      })

      observer.observe(document.querySelector('.scrollerBase-289Jih > div:nth-child(2)'), {
        attributes: true,
        childList: true,
        characterData: true
      })
    }
  })
  wrappedXHROpen.apply(this, arguments)
}

