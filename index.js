import fetch from 'node-fetch';

/**
 * corona centers
 * doc : https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15077586#/API%20%EB%AA%A9%EB%A1%9D/GETcenters
 */
fetch('https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=M7nts93CfSGP2XeH%2B9bVaO3oS4u07qJWC377LS1TOx%2B8Rq2a0zEcDJQkkq%2FeiMOaf95xgGl7STz3cZAyLIxB5w%3D%3D', {
  mode: 'no-cors',
})
  .then(response => response.json())
  .then(console.log)