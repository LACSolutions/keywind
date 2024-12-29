<#import "/assets/icons/amora.ftl" as icon>

<#macro kw>
  <div class="font-bold text-center text-2xl">
    <#nested>
  <div style="width: 100px; height: 100px; display: inline-block; margin-bottom: 30px;">
    <@icon.kw/>
  </div>
</div>
</#macro>
