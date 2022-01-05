"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"welcome-blog-post","metadata":{"permalink":"/blog/welcome-blog-post","editUrl":"https://github.com/kube-green/kube-green.github.io/edit/main/website/edit/main/blog/blog/2022-01-05-first-blog-post.mdx","source":"@site/blog/2022-01-05-first-blog-post.mdx","title":"Intro to kube-green","description":"Welcome to kube-green blog!","date":"2022-01-05T00:00:00.000Z","formattedDate":"January 5, 2022","tags":[{"label":"kube-green","permalink":"/blog/tags/kube-green"},{"label":"introduction","permalink":"/blog/tags/introduction"}],"readingTime":2.175,"truncated":false,"authors":[{"name":"Davide Bianchi","title":"Creator of kube-green","url":"https://github.com/davidebianchi","imageURL":"https://github.com/davidebianchi.png","key":"davidebianchi"}]},"content":"Welcome to *kube-green* blog!\\n\\nIn this blog, we\'ll introduce the new features of *kube-green*, and give you some other information about *kube-green*.\\n\\nIn this first tutorial, I will try to explain how it was born and why it is useful for reducing waste of resources.\\n\\n## Environmental impact\\n\\nEverything we do online has an impact on the real world environment.  \\nFrom the emails in our inboxes to photos and videos on the cloud, from online games to digital currency, all this digital activity run on physical servers that constantly use energy.\\n\\nJust some examples:\\n\\n- minecraft all time emissions are about 600 million Kg of CO2, equivalent to drive at about 2,1 billion of km ([reference](https://www.saveonenergy.com/uk/environmental-impact-of-video-games/))\\n- bitcoin produces between 22 and 22.9 million metric tons of carbon dioxide emissions a year, or between the levels produced by Jordan and Sri Lanka ([reference](https://www.reuters.com/technology/how-big-is-bitcoins-carbon-footprint-2021-05-13/))\\n- [here](https://thanks-in-advance.com/) it is possible to see how much emissions our emails generate\\n\\nThe Kubernetes clusters are not an exception. Also if they run in a cloud provider far from us they produces CO2, also if not used.\\n\\n## The idea of kube-green\\n\\nIn a cluster, non production namespaces are usually used only during business hours.  \\nThe business hours are around 40 hours per week, respect the total number of weekly hours which are 168.  \\nAlso, in Kubernetes the resources could be allocated (both CPU and memory, setting the request of a container) also if not used. This means most of the time the pods in these namespaces are unnecessarily consuming resources.\\n\\nThe basic idea of *kube-green* is to stop all pods in those namespaces.  \\n\\n![kube-green idea](/img/idea.png)\\n\\n### How it is possible?\\n\\n*kube-green* is a Kubernetes controller, which define a Custom Resource Definition called *SleepInfo*. *SleepInfo* CRD define when stop and restart the pods in a namespace.\\n\\nSo, for example in development namespaces, it is possible to stop all the pods in non business hours: wake up every morning from monday to friday and stop every night from monday to friday.\\n\\nAn example of *SleepInfo* CRD to make it is:\\n\\n```yaml\\napiVersion: kube-green.com/v1alpha1\\nkind: SleepInfo\\nmetadata:\\n  name: working-hours\\nspec:\\n  weekdays: \\"1-5\\"\\n  sleepAt: \\"20:00\\"\\n  wakeUpAt: \\"08:00\\"\\n  timeZone: \\"Europe/Rome\\"\\n  suspendCronJobs: true\\n```\\n\\n## What resources can you suspend?\\n\\nAt the time of this post, with *kube-green* at [v0.2.0](https://github.com/kube-green/kube-green/tree/v0.2.0), it is possible to sleep only **Deployment**.\\nOther resources will be added in the future.  \\nIf you need some particular resources, write it in [this issue](https://github.com/kube-green/kube-green/issues/77) to set it in roadmap!\\n\\n## Conclusion\\n\\nDo you want to reduce the CO2 emissions and costs of your Kubernetes cluster?\\n\\n[Read our documentation](https://kube-green.github.io/docs/getting-started) to install **kube-green** in your cluster!"}]}')}}]);